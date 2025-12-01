import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

const MAX_LENGTH = 20;

export default function App() {
  const [name, setName] = useState<string>('');
  const [greetingMessage, setGreetingMessage] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const handleGreet = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    if (name.trim().length === 0) {
      setShowError(true);
      setGreetingMessage('');
      return;
    }

    setShowError(false);
    setGreetingMessage(`¡Hola, ${name.trim()}!`);
  };

  const handleNameChange = (text: string) => {
    setName(text);
    if (showError && text.trim().length > 0) {
      setShowError(false);
    }
  };

  const isButtonDisabled = name.trim().length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {/* Header con nuevo diseño */}
        <LinearGradient
          colors={['#f8252cff', '#fad0c4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <Ionicons name="happy-outline" size={42} color="#fff" />
          <Text style={styles.title}>Tu Saludador</Text>
        </LinearGradient>

        {/* Contenido principal */}
        <View style={styles.content}>
          <Text style={styles.label}>¿Cómo te llamas?</Text>
          
          <TextInput
            style={[
              styles.input,
              showError && styles.inputError
            ]}
            placeholder="Escribe tu nombre aquí..."
            placeholderTextColor="#999"
            value={name}
            onChangeText={handleNameChange}
            maxLength={MAX_LENGTH}
          />

          <Text style={styles.charCounter}>
            {name.length} / {MAX_LENGTH}
          </Text>

          {showError && (
            <View style={styles.errorContainer}>
              <Ionicons name="alert-circle" size={16} color="#d63939" />
              <Text style={styles.errorText}>
                Por favor, introduce tu nombre
              </Text>
            </View>
          )}

          <Pressable
            style={[
              styles.button,
              isButtonDisabled && styles.buttonDisabled
            ]}
            onPress={handleGreet}
            disabled={isButtonDisabled}
          >
            <Ionicons 
              name="person-circle" 
              size={24} 
              color="white" 
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>
              Saludar
            </Text>
          </Pressable>

          {greetingMessage !== '' && (
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingMessage}>
                {greetingMessage}
              </Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae5e5ff',
  },

  keyboardView: {
    flex: 1,
  },

  header: {
    margin: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 24,
    elevation: 4,
    shadowColor: '#000000ff',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffffff',
  },

  content: {
    flex: 1,
    padding: 24,
  },

  label: {
    fontSize: 17,
    fontWeight: '600',
    color: '#050505ff',
    marginBottom: 10,
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 16,
    color: '#222',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  inputError: {
    borderColor: '#f84949ff',
    backgroundColor: '#ffecec',
  },

  charCounter: {
    fontSize: 12,
    color: '#000000ff',
    textAlign: 'right',
    marginTop: 4,
    marginBottom: 8,
  },

  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
    marginBottom: 12,
  },

  errorText: {
    fontSize: 14,
    color: '#000000ff',
    fontWeight: '500',
  },

  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
    backgroundColor: '#fa5252ff',
    shadowColor: '#ff4f4fff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonDisabled: {
    backgroundColor: '#fd8d8dff',
    shadowOpacity: 0,
    elevation: 0,
  },

  buttonIcon: {
    marginRight: 4,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },

  greetingContainer: {
    marginTop: 24,
    backgroundColor: '#ffced2ff',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f00000ff',
  },

  greetingMessage: {
    fontSize: 20,
    fontWeight: '600',
    color: '#030303ff',
    textAlign: 'center',
  },
});
