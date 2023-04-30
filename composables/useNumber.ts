export default () => {
    const number = useState('number', () => 0)

    const increase = () => {
        number.value ++
    }

    return { number, increase }
}