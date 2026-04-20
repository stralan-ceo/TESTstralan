@layer properties {
    @supports (((-webkit-hyphens: none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
            --tw-translate-x:0;
            --tw-translate-y: 0;
            --tw-translate-z: 0;
            --tw-rotate-x: initial;
            --tw-rotate-y: initial;
            --tw-rotate-z: initial;
            --tw-skew-x: initial;
            --tw-skew-y: initial;
            --tw-space-y-reverse: 0;
            --tw-border-style: solid;
            --tw-leading: initial;
            --tw-font-weight: initial;
            --tw-tracking: initial;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-color: initial;
            --tw-shadow-alpha: 100%;
            --tw-inset-shadow: 0 0 #0000;
            --tw-inset-shadow-color: initial;
            --tw-inset-shadow-alpha: 100%;
            --tw-ring-color: initial;
            --tw-ring-shadow: 0 0 #0000;
            --tw-inset-ring-color: initial;
            --tw-inset-ring-shadow: 0 0 #0000;
            --tw-ring-inset: initial;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-blur: initial;
            --tw-brightness: initial;
            --tw-contrast: initial;
            --tw-grayscale: initial;
            --tw-hue-rotate: initial;
            --tw-invert: initial;
            --tw-opacity: initial;
            --tw-saturate: initial;
            --tw-sepia: initial;
            --tw-drop-shadow: initial;
            --tw-drop-shadow-color: initial;
            --tw-drop-shadow-alpha: 100%;
            --tw-drop-shadow-size: initial;
            --tw-duration: initial;
            --tw-divide-x-reverse: 0
        }
    }
}

@layer theme {
    :root,
    :host {
        --font-sans: "Instrument Sans", sans-serif;
        --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --color-red-400: oklch(70.4% .191 22.216);
        --color-red-500: oklch(63.7% .237 25.331);
        --color-amber-400: oklch(82.8% .189 84.429);
        --color-green-400: oklch(79.2% .209 151.711);
        --color-green-500: oklch(72.3% .219 149.579);
        --color-blue-600: oklch(54.6% .245 262.881);
        --color-gray-600: oklch(44.6% .03 256.802);
        --spacing: .25rem;
        --container-lg: 32rem;
        --container-xl: 36rem;
        --container-2xl: 42rem;
        --container-3xl: 48rem;
        --container-4xl: 56rem;
        --container-5xl: 64rem;
        --text-xs: .75rem;
        --text-xs--line-height: calc(1 / .75);
        --text-sm: .875rem;
        --text-sm--line-height: calc(1.25 / .875);
        --text-base: 1rem;
        --text-base--line-height: 1.5;
        --text-lg: 1.125rem;
        --text-lg--line-height: calc(1.75 / 1.125);
        --text-xl: 1.25rem;
        --text-xl--line-height: calc(1.75 / 1.25);
        --text-3xl: 1.875rem;
        --text-3xl--line-height: 1.2;
        --text-4xl: 2.25rem;
        --text-4xl--line-height: calc(2.5 / 2.25);
        --text-5xl: 3rem;
        --text-5xl--line-height: 1;
        --text-6xl: 3.75rem;
        --text-6xl--line-height: 1;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --font-weight-extrabold: 800;
        --font-weight-black: 900;
        --tracking-tight: -.025em;
        --tracking-widest: .1em;
        --leading-tight: 1.25;
        --leading-snug: 1.375;
        --leading-relaxed: 1.625;
        --radius-sm: .25rem;
        --radius-lg: .5rem;
        --radius-xl: .75rem;
        --radius-2xl: 1rem;
        --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
        --default-transition-duration: .15s;
        --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        --default-font-family: var(--font-sans);
        --default-mono-font-family: var(--font-mono);
        --color-ink: #09090b;
        --color-panel: #111316;
        --color-raised: #181c24;
        --color-wire: #1e2330;
        --color-gold: #f59e0b;
        --color-gold-soft: #f59e0b1f;
        --color-cream: #f4efe6;
        --color-dim: #a8a29e;
        --color-fade: #52525b
    }
}

@layer base {
    *,
    :after,
    :before,
    ::backdrop {
        box-sizing: border-box;
        border: 0 solid;
        margin: 0;
        padding: 0
    }
    ::file-selector-button {
        box-sizing: border-box;
        border: 0 solid;
        margin: 0;
        padding: 0
    }
    html,
    :host {
        -webkit-text-size-adjust: 100%;
        tab-size: 4;
        line-height: 1.5;
        font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
        font-feature-settings: var(--default-font-feature-settings, normal);
        font-variation-settings: var(--default-font-variation-settings, normal);
        -webkit-tap-highlight-color: transparent
    }
    hr {
        height: 0;
        color: inherit;
        border-top-width: 1px
    }
    abbr:where([title]) {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit
    }
    a {
        color: inherit;
        -webkit-text-decoration: inherit;
        text-decoration: inherit
    }
    b,
    strong {
        font-weight: bolder
    }
    code,
    kbd,
    samp,
    pre {
        font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
        font-feature-settings: var(--default-mono-font-feature-settings, normal);
        font-variation-settings: var(--default-mono-font-variation-settings, normal);
        font-size: 1em
    }
    small {
        font-size: 80%
    }
    sub,
    sup {
        vertical-align: baseline;
        font-size: 75%;
        line-height: 0;
        position: relative
    }
    sub {
        bottom: -.25em
    }
    sup {
        top: -.5em
    }
    table {
        text-indent: 0;
        border-color: inherit;
        border-collapse: collapse
    }
    :-moz-focusring {
        outline: auto
    }
    progress {
        vertical-align: baseline
    }
    summary {
        display: list-item
    }
    ol,
    ul,
    menu {
        list-style: none
    }
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        vertical-align: middle;
        display: block
    }
    img,
    video {
        max-width: 100%;
        height: auto
    }
    button,
    input,
    select,
    optgroup,
    textarea {
        font: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
        letter-spacing: inherit;
        color: inherit;
        opacity: 1;
        background-color: #0000;
        border-radius: 0
    }
    ::file-selector-button {
        font: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
        letter-spacing: inherit;
        color: inherit;
        opacity: 1;
        background-color: #0000;
        border-radius: 0
    }
    :where(select:is([multiple], [size])) optgroup {
        font-weight: bolder
    }
    :where(select:is([multiple], [size])) optgroup option {
        padding-inline-start: 20px
    }
    ::file-selector-button {
        margin-inline-end: 4px
    }
    ::placeholder {
        opacity: 1
    }
    @supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px) {
        ::placeholder {
            color: currentColor
        }
        @supports (color:color-mix(in lab, red, red)) {
            ::placeholder {
                color: color-mix(in oklab, currentcolor 50%, transparent)
            }
        }
    }
    textarea {
        resize: vertical
    }
    ::-webkit-search-decoration {
        -webkit-appearance: none
    }
    ::-webkit-date-and-time-value {
        min-height: 1lh;
        text-align: inherit
    }
    ::-webkit-datetime-edit {
        display: inline-flex
    }
    ::-webkit-datetime-edit-fields-wrapper {
        padding: 0
    }
    ::-webkit-datetime-edit {
        padding-block: 0
    }
    ::-webkit-datetime-edit-year-field {
        padding-block: 0
    }
    ::-webkit-datetime-edit-month-field {
        padding-block: 0
    }
    ::-webkit-datetime-edit-day-field {
        padding-block: 0
    }
    ::-webkit-datetime-edit-hour-field {
        padding-block: 0
    }
    ::-webkit-datetime-edit-minute-field {
        padding-block: 0
    }
    ::-webkit-datetime-edit-second-field {
        padding-block: 0
    }
    ::-webkit-datetime-edit-millisecond-field {
        padding-block: 0
    }
    ::-webkit-datetime-edit-meridiem-field {
        padding-block: 0
    }
    ::-webkit-calendar-picker-indicator {
        line-height: 1
    }
    :-moz-ui-invalid {
        box-shadow: none
    }
    button,
    input:where([type=button], [type=reset], [type=submit]) {
        appearance: button
    }
    ::file-selector-button {
        appearance: button
    }
    ::-webkit-inner-spin-button {
        height: auto
    }
    ::-webkit-outer-spin-button {
        height: auto
    }
    [hidden]:where(:not([hidden=until-found])) {
        display: none !important
    }
}

@layer components;
@layer utilities {
    .pointer-events-none {
        pointer-events: none
    }
    .absolute {
        position: absolute
    }
    .fixed {
        position: fixed
    }
    .relative {
        position: relative
    }
    .static {
        position: static
    }
    .start {
        inset-inline-start: var(--spacing)
    }
    .-top-3\.5 {
        top: calc(var(--spacing) * -3.5)
    }
    .top-0 {
        top: calc(var(--spacing) * 0)
    }
    .top-8 {
        top: calc(var(--spacing) * 8)
    }
    .top-11 {
        top: calc(var(--spacing) * 11)
    }
    .right-0 {
        right: calc(var(--spacing) * 0)
    }
    .right-\[calc\(16\.66\%\+48px\)\] {
        right: calc(16.66% + 48px)
    }
    .bottom-8 {
        bottom: calc(var(--spacing) * 8)
    }
    .left-0 {
        left: calc(var(--spacing) * 0)
    }
    .left-1\/2 {
        left: 50%
    }
    .left-\[calc\(16\.66\%\+48px\)\] {
        left: calc(16.66% + 48px)
    }
    .z-10 {
        z-index: 10
    }
    .z-50 {
        z-index: 50
    }
    .mx-auto {
        margin-inline: auto
    }
    .mt-0\.5 {
        margin-top: calc(var(--spacing) * .5)
    }
    .mt-5 {
        margin-top: calc(var(--spacing) * 5)
    }
    .mt-6 {
        margin-top: calc(var(--spacing) * 6)
    }
    .mb-1 {
        margin-bottom: calc(var(--spacing) * 1)
    }
    .mb-2 {
        margin-bottom: calc(var(--spacing) * 2)
    }
    .mb-3 {
        margin-bottom: calc(var(--spacing) * 3)
    }
    .mb-4 {
        margin-bottom: calc(var(--spacing) * 4)
    }
    .mb-5 {
        margin-bottom: calc(var(--spacing) * 5)
    }
    .mb-6 {
        margin-bottom: calc(var(--spacing) * 6)
    }
    .mb-8 {
        margin-bottom: calc(var(--spacing) * 8)
    }
    .mb-10 {
        margin-bottom: calc(var(--spacing) * 10)
    }
    .mb-14 {
        margin-bottom: calc(var(--spacing) * 14)
    }
    .mb-16 {
        margin-bottom: calc(var(--spacing) * 16)
    }
    .ml-3 {
        margin-left: calc(var(--spacing) * 3)
    }
    .flex {
        display: flex
    }
    .grid {
        display: grid
    }
    .hidden {
        display: none
    }
    .inline-flex {
        display: inline-flex
    }
    .h-1\.5 {
        height: calc(var(--spacing) * 1.5)
    }
    .h-2 {
        height: calc(var(--spacing) * 2)
    }
    .h-2\.5 {
        height: calc(var(--spacing) * 2.5)
    }
    .h-7 {
        height: calc(var(--spacing) * 7)
    }
    .h-11 {
        height: calc(var(--spacing) * 11)
    }
    .h-12 {
        height: calc(var(--spacing) * 12)
    }
    .h-14 {
        height: calc(var(--spacing) * 14)
    }
    .h-16 {
        height: calc(var(--spacing) * 16)
    }
    .h-24 {
        height: calc(var(--spacing) * 24)
    }
    .h-72 {
        height: calc(var(--spacing) * 72)
    }
    .h-\[88px\] {
        height: 88px
    }
    .h-\[600px\] {
        height: 600px
    }
    .h-px {
        height: 1px
    }
    .min-h-screen {
        min-height: 100vh
    }
    .w-1\.5 {
        width: calc(var(--spacing) * 1.5)
    }
    .w-2 {
        width: calc(var(--spacing) * 2)
    }
    .w-2\.5 {
        width: calc(var(--spacing) * 2.5)
    }
    .w-7 {
        width: calc(var(--spacing) * 7)
    }
    .w-11 {
        width: calc(var(--spacing) * 11)
    }
    .w-12 {
        width: calc(var(--spacing) * 12)
    }
    .w-14 {
        width: calc(var(--spacing) * 14)
    }
    .w-24 {
        width: calc(var(--spacing) * 24)
    }
    .w-72 {
        width: calc(var(--spacing) * 72)
    }
    .w-\[88px\] {
        width: 88px
    }
    .w-\[600px\] {
        width: 600px
    }
    .w-full {
        width: 100%
    }
    .max-w-2xl {
        max-width: var(--container-2xl)
    }
    .max-w-3xl {
        max-width: var(--container-3xl)
    }
    .max-w-4xl {
        max-width: var(--container-4xl)
    }
    .max-w-5xl {
        max-width: var(--container-5xl)
    }
    .max-w-\[260px\] {
        max-width: 260px
    }
    .max-w-lg {
        max-width: var(--container-lg)
    }
    .max-w-xl {
        max-width: var(--container-xl)
    }
    .flex-1 {
        flex: 1
    }
    .flex-shrink-0 {
        flex-shrink: 0
    }
    .-translate-x-1\/2 {
        --tw-translate-x: -50%;
        translate: var(--tw-translate-x) var(--tw-translate-y)
    }
    .rotate-180 {
        rotate: 180deg
    }
    .transform {
        transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, )
    }
    .animate-pulse {
        animation: var(--animate-pulse)
    }
    .flex-col {
        flex-direction: column
    }
    .flex-row-reverse {
        flex-direction: row-reverse
    }
    .flex-wrap {
        flex-wrap: wrap
    }
    .items-baseline {
        align-items: baseline
    }
    .items-center {
        align-items: center
    }
    .items-start {
        align-items: flex-start
    }
    .justify-between {
        justify-content: space-between
    }
    .justify-center {
        justify-content: center
    }
    .gap-1 {
        gap: calc(var(--spacing) * 1)
    }
    .gap-2 {
        gap: calc(var(--spacing) * 2)
    }
    .gap-2\.5 {
        gap: calc(var(--spacing) * 2.5)
    }
    .gap-3 {
        gap: calc(var(--spacing) * 3)
    }
    .gap-4 {
        gap: calc(var(--spacing) * 4)
    }
    .gap-5 {
        gap: calc(var(--spacing) * 5)
    }
    .gap-6 {
        gap: calc(var(--spacing) * 6)
    }
    .gap-8 {
        gap: calc(var(--spacing) * 8)
    }
    .gap-12 {
        gap: calc(var(--spacing) * 12)
    }
    .gap-16 {
        gap: calc(var(--spacing) * 16)
    }
    :where(.space-y-3>:not(:last-child)) {
        --tw-space-y-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
        margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))
    }
    :where(.space-y-4>:not(:last-child)) {
        --tw-space-y-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
        margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))
    }
    :where(.space-y-14>:not(:last-child)) {
        --tw-space-y-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 14) * var(--tw-space-y-reverse));
        margin-block-end: calc(calc(var(--spacing) * 14) * calc(1 - var(--tw-space-y-reverse)))
    }
    .overflow-hidden {
        overflow: hidden
    }
    .overflow-x-hidden {
        overflow-x: hidden
    }
    .rounded-2xl {
        border-radius: var(--radius-2xl)
    }
    .rounded-full {
        border-radius: 3.40282e38px
    }
    .rounded-lg {
        border-radius: var(--radius-lg)
    }
    .rounded-xl {
        border-radius: var(--radius-xl)
    }
    .rounded-tl-sm {
        border-top-left-radius: var(--radius-sm)
    }
    .rounded-tr-sm {
        border-top-right-radius: var(--radius-sm)
    }
    .border {
        border-style: var(--tw-border-style);
        border-width: 1px
    }
    .border-y {
        border-block-style: var(--tw-border-style);
        border-block-width: 1px
    }
    .border-t {
        border-top-style: var(--tw-border-style);
        border-top-width: 1px
    }
    .border-b {
        border-bottom-style: var(--tw-border-style);
        border-bottom-width: 1px
    }
    .border-gold {
        border-color: var(--color-gold)
    }
    .border-gold\/15 {
        border-color: #f59e0b26
    }
    @supports (color:color-mix(in lab, red, red)) {
        .border-gold\/15 {
            border-color: color-mix(in oklab, var(--color-gold) 15%, transparent)
        }
    }
    .border-gold\/20 {
        border-color: #f59e0b33
    }
    @supports (color:color-mix(in lab, red, red)) {
        .border-gold\/20 {
            border-color: color-mix(in oklab, var(--color-gold) 20%, transparent)
        }
    }
    .border-gold\/25 {
        border-color: #f59e0b40
    }
    @supports (color:color-mix(in lab, red, red)) {
        .border-gold\/25 {
            border-color: color-mix(in oklab, var(--color-gold) 25%, transparent)
        }
    }
    .border-gold\/30 {
        border-color: #f59e0b4d
    }
    @supports (color:color-mix(in lab, red, red)) {
        .border-gold\/30 {
            border-color: color-mix(in oklab, var(--color-gold) 30%, transparent)
        }
    }
    .border-gold\/35 {
        border-color: #f59e0b59
    }
    @supports (color:color-mix(in lab, red, red)) {
        .border-gold\/35 {
            border-color: color-mix(in oklab, var(--color-gold) 35%, transparent)
        }
    }
    .border-wire {
        border-color: var(--color-wire)
    }
    .border-wire\/50 {
        border-color: #1e233080
    }
    @supports (color:color-mix(in lab, red, red)) {
        .border-wire\/50 {
            border-color: color-mix(in oklab, var(--color-wire) 50%, transparent)
        }
    }
    .bg-amber-400\/80 {
        background-color: #fcbb00cc
    }
    @supports (color:color-mix(in lab, red, red)) {
        .bg-amber-400\/80 {
            background-color: color-mix(in oklab, var(--color-amber-400) 80%, transparent)
        }
    }
    .bg-gold {
        background-color: var(--color-gold)
    }
    .bg-gold-soft {
        background-color: var(--color-gold-soft)
    }
    .bg-gold\/5 {
        background-color: #f59e0b0d
    }
    @supports (color:color-mix(in lab, red, red)) {
        .bg-gold\/5 {
            background-color: color-mix(in oklab, var(--color-gold) 5%, transparent)
        }
    }
    .bg-gold\/10 {
        background-color: #f59e0b1a
    }
    @supports (color:color-mix(in lab, red, red)) {
        .bg-gold\/10 {
            background-color: color-mix(in oklab, var(--color-gold) 10%, transparent)
        }
    }
    .bg-green-400 {
        background-color: var(--color-green-400)
    }
    .bg-green-500\/80 {
        background-color: #00c758cc
    }
    @supports (color:color-mix(in lab, red, red)) {
        .bg-green-500\/80 {
            background-color: color-mix(in oklab, var(--color-green-500) 80%, transparent)
        }
    }
    .bg-ink {
        background-color: var(--color-ink)
    }
    .bg-ink\/10 {
        background-color: #09090b1a
    }
    @supports (color:color-mix(in lab, red, red)) {
        .bg-ink\/10 {
            background-color: color-mix(in oklab, var(--color-ink) 10%, transparent)
        }
    }
    .bg-panel {
        background-color: var(--color-panel)
    }
    .bg-raised {
        background-color: var(--color-raised)
    }
    .bg-red-500\/10 {
        background-color: #fb2c361a
    }
    @supports (color:color-mix(in lab, red, red)) {
        .bg-red-500\/10 {
            background-color: color-mix(in oklab, var(--color-red-500) 10%, transparent)
        }
    }
    .bg-red-500\/80 {
        background-color: #fb2c36cc
    }
    @supports (color:color-mix(in lab, red, red)) {
        .bg-red-500\/80 {
            background-color: color-mix(in oklab, var(--color-red-500) 80%, transparent)
        }
    }
    .bg-wire {
        background-color: var(--color-wire)
    }
    .fill-gold {
        fill: var(--color-gold)
    }
    .p-6 {
        padding: calc(var(--spacing) * 6)
    }
    .p-7 {
        padding: calc(var(--spacing) * 7)
    }
    .px-4 {
        padding-inline: calc(var(--spacing) * 4)
    }
    .px-5 {
        padding-inline: calc(var(--spacing) * 5)
    }
    .px-6 {
        padding-inline: calc(var(--spacing) * 6)
    }
    .px-8 {
        padding-inline: calc(var(--spacing) * 8)
    }
    .px-10 {
        padding-inline: calc(var(--spacing) * 10)
    }
    .py-1 {
        padding-block: calc(var(--spacing) * 1)
    }
    .py-1\.5 {
        padding-block: calc(var(--spacing) * 1.5)
    }
    .py-2 {
        padding-block: calc(var(--spacing) * 2)
    }
    .py-2\.5 {
        padding-block: calc(var(--spacing) * 2.5)
    }
    .py-3 {
        padding-block: calc(var(--spacing) * 3)
    }
    .py-4 {
        padding-block: calc(var(--spacing) * 4)
    }
    .py-5 {
        padding-block: calc(var(--spacing) * 5)
    }
    .py-10 {
        padding-block: calc(var(--spacing) * 10)
    }
    .py-12 {
        padding-block: calc(var(--spacing) * 12)
    }
    .py-16 {
        padding-block: calc(var(--spacing) * 16)
    }
    .py-20 {
        padding-block: calc(var(--spacing) * 20)
    }
    .py-24 {
        padding-block: calc(var(--spacing) * 24)
    }
    .pt-2 {
        padding-top: calc(var(--spacing) * 2)
    }
    .pt-4 {
        padding-top: calc(var(--spacing) * 4)
    }
    .pt-20 {
        padding-top: calc(var(--spacing) * 20)
    }
    .pb-5 {
        padding-bottom: calc(var(--spacing) * 5)
    }
    .pb-16 {
        padding-bottom: calc(var(--spacing) * 16)
    }
    .text-center {
        text-align: center
    }
    .text-left {
        text-align: left
    }
    .text-3xl {
        font-size: var(--text-3xl);
        line-height: var(--tw-leading, var(--text-3xl--line-height))
    }
    .text-4xl {
        font-size: var(--text-4xl);
        line-height: var(--tw-leading, var(--text-4xl--line-height))
    }
    .text-5xl {
        font-size: var(--text-5xl);
        line-height: var(--tw-leading, var(--text-5xl--line-height))
    }
    .text-base {
        font-size: var(--text-base);
        line-height: var(--tw-leading, var(--text-base--line-height))
    }
    .text-lg {
        font-size: var(--text-lg);
        line-height: var(--tw-leading, var(--text-lg--line-height))
    }
    .text-sm {
        font-size: var(--text-sm);
        line-height: var(--tw-leading, var(--text-sm--line-height))
    }
    .text-xl {
        font-size: var(--text-xl);
        line-height: var(--tw-leading, var(--text-xl--line-height))
    }
    .text-xs {
        font-size: var(--text-xs);
        line-height: var(--tw-leading, var(--text-xs--line-height))
    }
    .text-\[10px\] {
        font-size: 10px
    }
    .text-\[11px\] {
        font-size: 11px
    }
    .text-\[13px\] {
        font-size: 13px
    }
    .leading-\[1\.0\] {
        --tw-leading: 1;
        line-height: 1
    }
    .leading-relaxed {
        --tw-leading: var(--leading-relaxed);
        line-height: var(--leading-relaxed)
    }
    .leading-snug {
        --tw-leading: var(--leading-snug);
        line-height: var(--leading-snug)
    }
    .leading-tight {
        --tw-leading: var(--leading-tight);
        line-height: var(--leading-tight)
    }
    .font-black {
        --tw-font-weight: var(--font-weight-black);
        font-weight: var(--font-weight-black)
    }
    .font-bold {
        --tw-font-weight: var(--font-weight-bold);
        font-weight: var(--font-weight-bold)
    }
    .font-extrabold {
        --tw-font-weight: var(--font-weight-extrabold);
        font-weight: var(--font-weight-extrabold)
    }
    .font-medium {
        --tw-font-weight: var(--font-weight-medium);
        font-weight: var(--font-weight-medium)
    }
    .font-semibold {
        --tw-font-weight: var(--font-weight-semibold);
        font-weight: var(--font-weight-semibold)
    }
    .tracking-\[0\.2em\] {
        --tw-tracking: .2em;
        letter-spacing: .2em
    }
    .tracking-tight {
        --tw-tracking: var(--tracking-tight);
        letter-spacing: var(--tracking-tight)
    }
    .tracking-widest {
        --tw-tracking: var(--tracking-widest);
        letter-spacing: var(--tracking-widest)
    }
    .text-blue-600 {
        color: var(--color-blue-600)
    }
    .text-cream {
        color: var(--color-cream)
    }
    .text-cream\/85 {
        color: #f4efe6d9
    }
    @supports (color:color-mix(in lab, red, red)) {
        .text-cream\/85 {
            color: color-mix(in oklab, var(--color-cream) 85%, transparent)
        }
    }
    .text-cream\/90 {
        color: #f4efe6e6
    }
    @supports (color:color-mix(in lab, red, red)) {
        .text-cream\/90 {
            color: color-mix(in oklab, var(--color-cream) 90%, transparent)
        }
    }
    .text-dim {
        color: var(--color-dim)
    }
    .text-fade {
        color: var(--color-fade)
    }
    .text-gold {
        color: var(--color-gold)
    }
    .text-gray-600 {
        color: var(--color-gray-600)
    }
    .text-green-400 {
        color: var(--color-green-400)
    }
    .text-ink {
        color: var(--color-ink)
    }
    .text-ink\/50 {
        color: #09090b80
    }
    @supports (color:color-mix(in lab, red, red)) {
        .text-ink\/50 {
            color: color-mix(in oklab, var(--color-ink) 50%, transparent)
        }
    }
    .text-ink\/65 {
        color: #09090ba6
    }
    @supports (color:color-mix(in lab, red, red)) {
        .text-ink\/65 {
            color: color-mix(in oklab, var(--color-ink) 65%, transparent)
        }
    }
    .text-red-400 {
        color: var(--color-red-400)
    }
    .uppercase {
        text-transform: uppercase
    }
    .italic {
        font-style: italic
    }
    .ring,
    .ring-1 {
        --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)
    }
    .ring-2 {
        --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)
    }
    .ring-3 {
        --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)
    }
    .filter {
        filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, )
    }
    .transition-all {
        transition-property: all;
        transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
        transition-duration: var(--tw-duration, var(--default-transition-duration))
    }
    .transition-colors {
        transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
        transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
        transition-duration: var(--tw-duration, var(--default-transition-duration))
    }
    .transition-transform {
        transition-property: transform, translate, scale, rotate;
        transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
        transition-duration: var(--tw-duration, var(--default-transition-duration))
    }
    .delay-100 {
        transition-delay: .1s
    }
    .delay-200 {
        transition-delay: .2s
    }
    .delay-300 {
        transition-delay: .3s
    }
    .delay-400 {
        transition-delay: .4s
    }
    .duration-200 {
        --tw-duration: .2s;
        transition-duration: .2s
    }
    .duration-300 {
        --tw-duration: .3s;
        transition-duration: .3s
    }
    @media(hover:hover) {
        .group-hover\:bg-gold\/18:is(:where(.group): hover *) {
            background-color:#f59e0b2e
        }
        @supports (color:color-mix(in lab, red, red)) {
            .group-hover\:bg-gold\/18:is(:where(.group): hover *) {
                background-color:color-mix(in oklab, var(--color-gold) 18%, transparent)
            }
        }
        .group-hover\:bg-red-500\/18:is(:where(.group):hover *) {
            background-color: #fb2c362e
        }
        @supports (color:color-mix(in lab, red, red)) {
            .group-hover\:bg-red-500\/18:is(:where(.group): hover *) {
                background-color:color-mix(in oklab, var(--color-red-500) 18%, transparent)
            }
        }
    }
    .first\:pl-0:first-child {
        padding-left: calc(var(--spacing) * 0)
    }
    .last\:pr-0:last-child {
        padding-right: calc(var(--spacing) * 0)
    }
    @media(hover:hover) {
        .hover\:border-dim:hover {
            border-color: var(--color-dim)
        }
        .hover\:border-gold\/35:hover {
            border-color: #f59e0b59
        }
        @supports (color:color-mix(in lab, red, red)) {
            .hover\:border-gold\/35:hover {
                border-color: color-mix(in oklab, var(--color-gold) 35%, transparent)
            }
        }
        .hover\:border-red-500\/40:hover {
            border-color: #fb2c3666
        }
        @supports (color:color-mix(in lab, red, red)) {
            .hover\:border-red-500\/40:hover {
                border-color: color-mix(in oklab, var(--color-red-500) 40%, transparent)
            }
        }
        .hover\:bg-amber-400:hover {
            background-color: var(--color-amber-400)
        }
        .hover\:bg-raised:hover {
            background-color: var(--color-raised)
        }
        .hover\:text-cream:hover {
            color: var(--color-cream)
        }
        .hover\:underline:hover {
            text-decoration-line: underline
        }
    }
    @media(min-width:40rem) {
        .sm\:flex-row {
            flex-direction: row
        }
    }
    @media(min-width:48rem) {
        .md\:block {
            display: block
        }
        .md\:flex {
            display: flex
        }
        .md\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr))
        }
        .md\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr))
        }
        .md\:flex-row {
            flex-direction: row
        }
        .md\:items-center {
            align-items: center
        }
        .md\:gap-0 {
            gap: calc(var(--spacing) * 0)
        }
        :where(.md\:divide-x>:not(:last-child)) {
            --tw-divide-x-reverse: 0;
            border-inline-style: var(--tw-border-style);
            border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
            border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)))
        }
        :where(.md\:divide-wire>:not(:last-child)) {
            border-color: var(--color-wire)
        }
    }
    @media(min-width:64rem) {
        .lg\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr))
        }
        .lg\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr))
        }
        .lg\:grid-cols-\[1fr_420px\] {
            grid-template-columns: 1fr 420px
        }
        .lg\:px-12 {
            padding-inline: calc(var(--spacing) * 12)
        }
        .lg\:py-0 {
            padding-block: calc(var(--spacing) * 0)
        }
        .lg\:pt-28 {
            padding-top: calc(var(--spacing) * 28)
        }
        .lg\:pb-24 {
            padding-bottom: calc(var(--spacing) * 24)
        }
        .lg\:text-4xl {
            font-size: var(--text-4xl);
            line-height: var(--tw-leading, var(--text-4xl--line-height))
        }
        .lg\:text-5xl {
            font-size: var(--text-5xl);
            line-height: var(--tw-leading, var(--text-5xl--line-height))
        }
        .lg\:text-6xl {
            font-size: var(--text-6xl);
            line-height: var(--tw-leading, var(--text-6xl--line-height))
        }
        .lg\:text-\[64px\] {
            font-size: 64px
        }
    }
}

*,
:before,
:after {
    box-sizing: border-box
}

body {
    margin: calc(var(--spacing) * 0);
    background-color: var(--color-ink);
    color: var(--color-cream);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Instrument Sans, sans-serif
}

h1,
h2,
h3,
h4 {
    font-family: Bricolage Grotesque, sans-serif
}

@keyframes ring-pulse {
    0% {
        opacity: .5;
        transform: scale(1)
    }
    to {
        opacity: 0;
        transform: scale(2.8)
    }
}

@keyframes float-y {
    0%,
    to {
        transform: translateY(0)
    }
    50% {
        transform: translateY(-10px)
    }
}

@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(22px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes slide-in-right {
    0% {
        opacity: 0;
        transform: translate(30px)
    }
    to {
        opacity: 1;
        transform: translate(0)
    }
}

.anim-fade-up {
    animation: .65s cubic-bezier(.22, 1, .36, 1) forwards fade-up
}

.anim-slide-right {
    animation: .65s cubic-bezier(.22, 1, .36, 1) forwards slide-in-right
}

.anim-float {
    animation: 5s ease-in-out infinite float-y
}

.ring-1 {
    animation: 2.4s ease-out infinite ring-pulse
}

.ring-2 {
    animation: 2.4s ease-out .8s infinite ring-pulse
}

.ring-3 {
    animation: 2.4s ease-out 1.6s infinite ring-pulse
}

.delay-100 {
    opacity: 0;
    animation-delay: .1s
}

.delay-200 {
    opacity: 0;
    animation-delay: .2s
}

.delay-300 {
    opacity: 0;
    animation-delay: .3s
}

.delay-400 {
    opacity: 0;
    animation-delay: .4s
}

.delay-500 {
    opacity: 0;
    animation-delay: .5s
}

.noise-overlay:after {
    content: "";
    pointer-events: none;
    z-index: 999;
    opacity: .4;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
    position: fixed;
    inset: 0
}

.dot-grid {
    background-image: radial-gradient(circle, #1e2330 1px, #0000 1px);
    background-size: 32px 32px
}

@property --tw-translate-x {
    syntax: "*";
    inherits: false;
    initial-value: 0
}

@property --tw-translate-y {
    syntax: "*";
    inherits: false;
    initial-value: 0
}

@property --tw-translate-z {
    syntax: "*";
    inherits: false;
    initial-value: 0
}

@property --tw-rotate-x {
    syntax: "*";
    inherits: false
}

@property --tw-rotate-y {
    syntax: "*";
    inherits: false
}

@property --tw-rotate-z {
    syntax: "*";
    inherits: false
}

@property --tw-skew-x {
    syntax: "*";
    inherits: false
}

@property --tw-skew-y {
    syntax: "*";
    inherits: false
}

@property --tw-space-y-reverse {
    syntax: "*";
    inherits: false;
    initial-value: 0
}

@property --tw-border-style {
    syntax: "*";
    inherits: false;
    initial-value: solid
}

@property --tw-leading {
    syntax: "*";
    inherits: false
}

@property --tw-font-weight {
    syntax: "*";
    inherits: false
}

@property --tw-tracking {
    syntax: "*";
    inherits: false
}

@property --tw-shadow {
    syntax: "*";
    inherits: false;
    initial-value: 0 0 #0000
}

@property --tw-shadow-color {
    syntax: "*";
    inherits: false
}

@property --tw-shadow-alpha {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 100%
}

@property --tw-inset-shadow {
    syntax: "*";
    inherits: false;
    initial-value: 0 0 #0000
}

@property --tw-inset-shadow-color {
    syntax: "*";
    inherits: false
}

@property --tw-inset-shadow-alpha {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 100%
}

@property --tw-ring-color {
    syntax: "*";
    inherits: false
}

@property --tw-ring-shadow {
    syntax: "*";
    inherits: false;
    initial-value: 0 0 #0000
}

@property --tw-inset-ring-color {
    syntax: "*";
    inherits: false
}

@property --tw-inset-ring-shadow {
    syntax: "*";
    inherits: false;
    initial-value: 0 0 #0000
}

@property --tw-ring-inset {
    syntax: "*";
    inherits: false
}

@property --tw-ring-offset-width {
    syntax: "<length>";
    inherits: false;
    initial-value: 0
}

@property --tw-ring-offset-color {
    syntax: "*";
    inherits: false;
    initial-value: #fff
}

@property --tw-ring-offset-shadow {
    syntax: "*";
    inherits: false;
    initial-value: 0 0 #0000
}

@property --tw-blur {
    syntax: "*";
    inherits: false
}

@property --tw-brightness {
    syntax: "*";
    inherits: false
}

@property --tw-contrast {
    syntax: "*";
    inherits: false
}

@property --tw-grayscale {
    syntax: "*";
    inherits: false
}

@property --tw-hue-rotate {
    syntax: "*";
    inherits: false
}

@property --tw-invert {
    syntax: "*";
    inherits: false
}

@property --tw-opacity {
    syntax: "*";
    inherits: false
}

@property --tw-saturate {
    syntax: "*";
    inherits: false
}

@property --tw-sepia {
    syntax: "*";
    inherits: false
}

@property --tw-drop-shadow {
    syntax: "*";
    inherits: false
}

@property --tw-drop-shadow-color {
    syntax: "*";
    inherits: false
}

@property --tw-drop-shadow-alpha {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 100%
}

@property --tw-drop-shadow-size {
    syntax: "*";
    inherits: false
}

@property --tw-duration {
    syntax: "*";
    inherits: false
}

@property --tw-divide-x-reverse {
    syntax: "*";
    inherits: false;
    initial-value: 0
}

@keyframes pulse {
    50% {
        opacity: .5
    }
}