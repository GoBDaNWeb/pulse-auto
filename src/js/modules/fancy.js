import { Fancybox } from "@fancyapps/ui";
export const fancy = () => {
  Fancybox.bind('[data-fancybox="exterior"]', {
    Thumbs: {
      //   showOnStart: false,
    },
  });
  Fancybox.bind('[data-fancybox="interior"]', {
    Thumbs: {
      //   showOnStart: false,
    },
  });
  Fancybox.bind('[data-fancybox="equipment"]', {
    Thumbs: {
      //   showOnStart: false,
    },
  });
};
