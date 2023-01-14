export async function loadLayoutMiddleware(route) {
    const { layout } = route.meta;
    const layoutName = (layout || 'default') + 'Layout';

    const component = await import(`../../layouts/${layoutName}.vue`);
    route.meta.layoutComponent = component.default;
}
