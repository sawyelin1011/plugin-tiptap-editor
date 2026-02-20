import { definePlugin as n, EXTENSION_POINTS as i } from "@gsmflow/plugin-sdk";
const s = n({
  id: "tiptap-editor",
  name: "TipTap Editor",
  version: "1.0.0",
  permissions: ["cms.write"],
  setup(e) {
    e.register(i.CMS.EDITOR_TOOLBAR, {
      priority: 1,
      handler: async (l, o) => ({
        type: "toolbar-items",
        items: [
          {
            id: "bold",
            label: "Bold",
            action: "toggleBold",
            shortcut: "Mod-B"
          },
          {
            id: "italic",
            label: "Italic",
            action: "toggleItalic",
            shortcut: "Mod-I"
          },
          {
            id: "underline",
            label: "Underline",
            action: "toggleUnderline",
            shortcut: "Mod-U"
          },
          {
            id: "strike",
            label: "Strikethrough",
            action: "toggleStrike",
            shortcut: "Mod-Shift-X"
          },
          { type: "separator" },
          {
            id: "heading1",
            label: "Heading 1",
            action: "toggleHeading",
            params: { level: 1 },
            shortcut: "Mod-Alt-1"
          },
          {
            id: "heading2",
            label: "Heading 2",
            action: "toggleHeading",
            params: { level: 2 },
            shortcut: "Mod-Alt-2"
          },
          {
            id: "heading3",
            label: "Heading 3",
            action: "toggleHeading",
            params: { level: 3 },
            shortcut: "Mod-Alt-3"
          },
          { type: "separator" },
          {
            id: "bulletList",
            label: "Bullet List",
            action: "toggleBulletList",
            shortcut: "Mod-Shift-8"
          },
          {
            id: "orderedList",
            label: "Numbered List",
            action: "toggleOrderedList",
            shortcut: "Mod-Shift-7"
          },
          {
            id: "blockquote",
            label: "Quote",
            action: "toggleBlockquote",
            shortcut: "Mod-Shift-B"
          },
          { type: "separator" },
          {
            id: "link",
            label: "Link",
            action: "toggleLink",
            shortcut: "Mod-K"
          },
          {
            id: "image",
            label: "Image",
            action: "insertImage"
          },
          {
            id: "code",
            label: "Code",
            action: "toggleCode",
            shortcut: "Mod-E"
          },
          {
            id: "codeBlock",
            label: "Code Block",
            action: "toggleCodeBlock",
            shortcut: "Mod-Alt-C"
          },
          { type: "separator" },
          {
            id: "undo",
            label: "Undo",
            action: "undo",
            shortcut: "Mod-Z"
          },
          {
            id: "redo",
            label: "Redo",
            action: "redo",
            shortcut: "Mod-Shift-Z"
          }
        ]
      })
    }), e.register(i.CMS.FIELD, {
      priority: 1,
      handler: async (l, o) => {
        const t = o;
        return t.type !== "richtext" ? null : {
          type: "richtext",
          component: "TipTapEditor",
          config: {
            placeholder: t.config?.placeholder || "Start typing...",
            minHeight: t.config?.minHeight || 200,
            maxHeight: t.config?.maxHeight || 600,
            enableMarkdown: t.config?.enableMarkdown !== !1,
            enableImages: t.config?.enableImages !== !1,
            enableLinks: t.config?.enableLinks !== !1,
            enableCodeBlocks: t.config?.enableCodeBlocks !== !1
          }
        };
      }
    }), e.register(i.CMS.SHORTCODE, {
      priority: 1,
      handler: async (l, o) => {
        const t = o;
        if (t.name !== "richtext")
          return null;
        const a = t.content || "";
        return `<div class="${t.attributes.class || "prose"}">${a}</div>`;
      }
    });
  },
  async onInstall(e) {
    e.log.info("TipTap Editor plugin installed"), e.hasPermission("cms.write") || e.log.warn("Plugin installed without cms:write permission");
  },
  async onEnable(e) {
    e.log.info("TipTap Editor plugin enabled");
  },
  async onDisable(e) {
    e.log.info("TipTap Editor plugin disabled");
  },
  async onUninstall(e) {
    e.log.info("TipTap Editor plugin uninstalled");
  }
});
export {
  s as default
};
//# sourceMappingURL=index.js.map
