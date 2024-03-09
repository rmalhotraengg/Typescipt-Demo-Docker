export function BinderDecorator(_, _2, descriptor) {
    const method = descriptor.value;
    const adjDesriptor = {
        configurable: true,
        get() {
            const boundMethod = method.bind(this);
            return boundMethod;
        }
    };
    return adjDesriptor;
}
//# sourceMappingURL=bindDecorator.js.map