const [,, modulePath, functionName] = process.argv;

if (!modulePath || !functionName) {
    console.error('Usage: node runner.js <modulePath> <functionName>');
    process.exit(1);
}

(async () => {
    try {
        const module = await import(`./${modulePath}.js`);
        const func = module[functionName];

        if (typeof func !== 'function') {
            throw new Error(`Function ${functionName} not found in module ${modulePath}`);
        }

        func();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
})();