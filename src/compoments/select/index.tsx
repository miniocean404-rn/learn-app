import { PropsWithChildren } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useColorScheme, View, Text, StyleSheet } from 'react-native'
import styles from '@/compoments/select/style'

type SectionProps = PropsWithChildren<{
  title: string
}>

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  )
}

export default Section
