export default () => {
    const validate = (data: any) => {
        let messages = [] as string[];

        Object.keys(data).forEach((key: string) => {
            if (typeof data[key] == 'string' && data[key] == "") {
                messages.push(`The input (${key}) must be string.`)

            } else if (typeof data[key] == 'number' && data[key] <=0) {
                messages.push(`The input (${key}) must be a number.`)
            }
        })

        return messages.length > 0 ? messages : true
    }

    return {
        validate
    }
}