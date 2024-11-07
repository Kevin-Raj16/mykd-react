
export const animationCreate = () => {
    import("wow.js").then((module) => {
      const WOW = module.default;
      const wow = new WOW({ live: false })
      wow.init();
    });
};