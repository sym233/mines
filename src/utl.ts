function assert(...args: Array<boolean | string>): void {
    const l = args.length;
    const msg = typeof args[l - 1] === 'string' ? args[l - 1] as string : 'Assert Failed';
    for (let i = 0; i < l; i++) {
        if (!args[i]) {
            throw new Error(`${msg} at ${i}th argument`);
        }
    }
}

export { assert };
