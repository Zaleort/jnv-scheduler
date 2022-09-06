<script lang="tsx">
import useMedia from '@/composables/useMedia';
import Media from '@/constants/MediaQueries';
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  VNode,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Heading',
  props: {
    level: {
      type: [String, Number],
      default: '1',
    },

    icon: {
      type: String,
      default: null,
    },

    iconColor: {
      type: String,
      default: 'primary',
    },

    iconFill: {
      type: String,
      default: 'currentColor',
    },

    back: {
      type: Boolean,
      default: false,
    },

    backMethod: {
      type: Function,
      default: null,
    },

    actions: {
      type: Array as PropType<{
        name: string,
        icon?: string,
        color?: string,
        plain?: boolean,
        to?: string,
        action: () => unknown
      }[]>,
      default: null,
    },

    wrap: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['wrapped'],
  setup(props, context) {
    const router = useRouter();
    const media = useMedia();

    const goBack = () => {
      if (props.backMethod) {
        props.backMethod();
      } else {
        router.back();
      }
    };

    const isMobile = computed(() => media.mediaQuery.value! <= Media.MobileL);

    const headingRef = ref<HTMLElement>();
    const isWrapped = ref(false);
    const observer = new ResizeObserver(entries => {
      entries.forEach(el => isWrapped.value = el.contentRect.height >= 90);
    });

    watch(isWrapped, () => context.emit('wrapped', isWrapped.value));

    onMounted(() => {
      if (!headingRef.value) return;
      observer.observe(headingRef.value);
      context.emit('wrapped', isWrapped.value);
    });

    onBeforeUnmount(() => {
      observer.disconnect();
    });

    return {
      isMobile,
      goBack,
      headingRef,
      isWrapped,
    };
  },

  render() {
    const icon = h(
      <ui-icon
        icon={this.icon}
        fill={this.iconFill}
        emphasis
        color={this.iconColor}
        class={'heading__icon'}
      />,
    );

    const back = h(
      <ui-icon
        icon="arrowLeft"
        class="clickable heading__back"
        onClick={this.goBack}
      />,
    );

    let actionNode: VNode | null = null;
    const actionButtons: VNode[] = [];
    if (this.actions && this.actions.length > 0) {
      this.actions.forEach((o) => {
        actionButtons.push(h(
          <ui-dropdown-item
            onClick={o.action || null}
            icon={o.icon || null}
            color={o.color || 'primary'}
            to={o.to || null}
          >
            {o.name}
          </ui-dropdown-item>,
        ));
      });

      actionNode = h(
        <ui-dropdown />,
        { class: 'heading__dropdown' },
        {
          default: () => [h(<ui-icon icon="dots" size="l" class="options-icon" />)],
          menu: () => actionButtons,
        },
      );
    }

    const mainChildren = [];
    if (this.back) mainChildren.push(back);
    if (this.icon) mainChildren.push(icon);

    const titleChildren = [];
    if (this.$slots.default) {
      const titleContainer = h('div', { class: 'heading__title' }, this.$slots.default());
      titleChildren.push(titleContainer);
    }

    if (this.$slots.subtitle) {
      const subtitle = h('span', { class: 'heading__subtitle' }, this.$slots.subtitle());
      titleChildren.push(subtitle);
    }

    const title = h('div', { class: 'heading__title-container' }, titleChildren);
    mainChildren.push(title);
    const main = h('div', { class: 'heading__main' }, mainChildren);

    const children = [];
    children.push(main);
    if (this.$slots.action) children.push(h('div', { class: 'heading__action' }, this.$slots.action()));
    if (actionNode) children.push(actionNode);

    return h(
      `h${this.level}`,
      {
        class: { heading: true, 'is-wrap': this.wrap },
        ref: 'headingRef',
      },

      children,
    );
  },
});
</script>
