export let
    headingsHtags = {
        script: `
    <h1 class="mb-3">h1. Bootstrap heading</h1>
            <h2 class="mb-3">h2. Bootstrap heading</h2>
            <h3 class="mb-3">h3. Bootstrap heading</h3>
            <h4 class="mb-3">h4. Bootstrap heading</h4>
            <h5 class="mb-3">h5. Bootstrap heading</h5>
            <h6 class="mb-0">h6. Bootstrap heading</h6>` },
    headingClassNames = {
        script: `
     <p class="h1 mb-3">h1. Bootstrap heading</p>
            <p class="h2 mb-3">h2. Bootstrap heading</p>
            <p class="h3 mb-3">h3. Bootstrap heading</p>
            <p class="h4 mb-3">h4. Bootstrap heading</p>
            <p class="h5 mb-3">h5. Bootstrap heading</p>
            <p class="h6 mb-0">h6. Bootstrap heading</p>` },
    displayHeadings = {
        script: `
   <h1 class="display-1">Display 1</h1>
            <h1 class="display-2">Display 2</h1>
            <h1 class="display-3">Display 3</h1>
            <h1 class="display-4">Display 4</h1>
            <h1 class="display-5">Display 5</h1>
            <h1 class="display-6">Display 6</h1>` },
    customizingHeadings = {
        script: `
      <h3>
                    Fancy display heading
                    <small class="text-muted">With faded secondary text</small>
                </h3>` },
    inlineTextElements = {
        script: `
     <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                <p><del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p><s>This line of text is meant to be treated as no longer
                        accurate.</s>
                </p>
                <p><ins>This line of text is meant to be treated as an addition to the
                        document.</ins></p>
                <p><u>This line of text will render as underlined.</u></p>
                <p><small>This line of text is meant to be treated as fine
                        print.</small>
                </p>
                <p><strong>This line rendered as bold text.</strong></p>
                <p class="mb-0"><em>This line rendered as italicized text.</em></p>` },
    fontSizes = {
        script: `
    <p class="fs-1 mb-2">.fs-1 text</p>
                <p class="fs-2 mb-2">.fs-2 text</p>
                <p class="fs-3 mb-2">.fs-3 text</p>
                <p class="fs-4 mb-2">.fs-4 text</p>
                <p class="fs-5 mb-2">.fs-5 text</p>
                <p class="fs-6 mb-0">.fs-6 text</p>` },
    leadParagraph = {
        script: `
    <p class="lead mb-0">
                    <b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations
                    of
                    passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even slightly believable. If you are going
                    to
                    use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                    the
                    middle of text.
                </p>` },
    leftAligned = {
        script: `
   <figure class="blockquote-container">
                    <blockquote class="blockquote mb-2">
                        <h6>The greatest glory in living lies not in never falling, but in rising every time we
                            fall.
                        </h6>
                    </blockquote>
                    <figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson
                            Mandela</cite>
                    </figcaption>
                </figure>` },
    rightAligned = {
        script: `
   <figure class="blockquote-container text-end">
                    <blockquote class="blockquote mb-2">
                        <h6>The greatest glory in living lies not in never falling, but in rising every time we
                            fall.
                        </h6>
                    </blockquote>
                    <figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson
                            Mandela</cite>
                    </figcaption>
                </figure>` },
    primaryBlockquote = {
        script: `
    <blockquote class="blockquote custom-blockquote primary mb-0 text-center">
                    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite
                            title="Source Title">-Eleanor Roosevelt</cite></footer>
                    <span class="quote-icon"><i class="ri-information-line"></i></span>
                </blockquote>` },
    secondaryBlockquote = {
        script: `
     <blockquote class="blockquote custom-blockquote secondary mb-0 text-center">
                    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite
                            title="Source Title">-Eleanor Roosevelt</cite></footer>
                    <span class="quote-icon"><i class="ri-information-line"></i></span>
                </blockquote>` },
    warningBlockquote = {
        script: `
   <blockquote class="blockquote custom-blockquote warning mb-0 text-center">
                    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite
                            title="Source Title">-Eleanor Roosevelt</cite></footer>
                    <span class="quote-icon"><i class="ri-information-line"></i></span>
                </blockquote>` },
    successBlockquote = {
        script: `
     <blockquote class="blockquote custom-blockquote success mb-0 text-center">
                    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite
                            title="Source Title">-Eleanor Roosevelt</cite></footer>
                    <span class="quote-icon"><i class="ri-information-line"></i></span>
                </blockquote>` },
    inofBlockquote = {
        script: `
    <blockquote class="blockquote custom-blockquote info mb-0 text-center">
                    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite
                            title="Source Title">-Eleanor Roosevelt</cite></footer>
                    <span class="quote-icon"><i class="ri-information-line"></i></span>
                </blockquote>` },
    dangerBlockquote = {
        script: `
    <blockquote class="blockquote custom-blockquote danger mb-0 text-center">
                    <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                    <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite
                            title="Source Title">-Eleanor Roosevelt</cite></footer>
                    <span class="quote-icon"><i class="ri-information-line"></i></span>
                </blockquote>` },
    descriptionListAlignment = {
        script: `
    <dl class="row mb-0">
                    <dt class="col-sm-3">Description lists</dt>
                    <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                    <dt class="col-sm-3">Term</dt>
                    <dd class="col-sm-9">
                        <p>Definition for the term.</p>
                        <p>And some more placeholder definition text.</p>
                    </dd>

                    <dt class="col-sm-3">Another term</dt>
                    <dd class="col-sm-9">This definition is short, so no extra paragraphs or
                        anything.</dd>

                    <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                    <dd class="col-sm-9">This can be useful when space is tight. Adds an
                        ellipsis at
                        the end.</dd>

                    <dt class="col-sm-3">Nesting</dt>
                    <dd class="col-sm-9 mb-0">
                        <dl class="row mb-0">
                            <dt class="col-sm-4">Nested definition list</dt>
                            <dd class="col-sm-8 mb-0">I heard you like definition lists. Let me put a
                                definition list inside your definition list.</dd>
                        </dl>
                    </dd>
                </dl>` },
    listUnstyled = {
        script: ` <ul class="list-unstyled">
                    <li>This is a list.</li>
                    <li>It appears completely unstyled.</li>
                    <li>Structurally, it's still a list.</li>
                    <li>However, this style only applies to immediate child elements.</li>
                    <li class="mb-2">Nested lists:
                        <ul>
                            <li>are unaffected by this style</li>
                            <li>will still show a bullet</li>
                            <li>and have appropriate left margin</li>
                        </ul>
                    </li>
                    <li>This may still come in handy in some situations.</li>
                </ul>` },
    sbbreviations = {
        script: `<p><abbr title="attribute">attr</abbr></p>
            <p class="mb-0"><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>` },
    listinline = {
        script: `<ul class="list-inline mb-0">
                <li class="list-inline-item">This is a list item.</li>
                <li class="list-inline-item">And another one.</li>
                <li class="list-inline-item">But they're displayed inline.</li>
            </ul>` },
    horizontalrules = {
        script: `<p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste
                obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor
                magni
                a vero sunt ut harum.</p>
            <div class="text-success">
                <hr>
            </div>
            <p class=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni
                numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>

            <hr class="text-danger border-2 opacity-50">
            <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid
                consequatur
                aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
            <hr class="border-primary border-3 opacity-75">` },
    texttransform = {
        script: `<p class="text-lowercase">Lowercased text.</p>
                <p class="text-uppercase">Uppercased text.</p>
                <p class="text-capitalize mb-0">CapiTaliZed text.</p>` },
    textDecoration = {
        script: ` <p class="text-decoration-underline">This text has a line underneath it.
            </p>
            <p class="text-decoration-line-through">This text has a line going
                through
                it.
            </p>
            <a href="javascript:void(0);" class="text-decoration-none">This link has its text
                decoration
                removed
            </a>` },
    fontWeightAndItalics = {
        script: `<p class="fw-bold">Bold text.</p>
            <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
            <p class="fw-semibold">Semibold weight text.</p>
            <p class="fw-normal">Normal weight text.</p>
            <p class="fw-light">Light weight text.</p>
            <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
            <p class="fst-italic">Italic text.</p>
            <p class="fst-normal mb-0">Text with normal font style</p>` },
    lineHeight = {
        script: ` <p class="lh-1">This is a long paragraph written to show how the line-height of
                    an
                    element is affected by our utilities. Classes are applied to the element
                    itself
                    or sometimes the parent element. These classes can be customized as needed
                    with
                    our utility API.
                </p>
                <p class="lh-sm">This is a long paragraph written to show how the line-height of
                    an
                    element is affected by our utilities. Classes are applied to the element
                    itself
                    or sometimes the parent element. These classes can be customized as needed
                    with
                    our utility API.
                </p>
                <p class="lh-base">This is a long paragraph written to show how the line-height
                    of
                    an element is affected by our utilities. Classes are applied to the element
                    itself or sometimes the parent element. These classes can be customized as
                    needed with our utility API.
                </p>
                <p class="lh-lg mb-0">This is a long paragraph written to show how the
                    line-height
                    of an
                    element is affected by our utilities. Classes are applied to the element
                    itself
                    or sometimes the parent element. These classes can be customized as needed
                    with
                    our utility API.
                </p>` },
    monospace = {
        script: `
    <p class="font-monospace mb-0">This is in monospace</p>` },
    resetColor = {
        script: `
     <p class="text-muted mb-0">
                    Muted text with a <a href="javascript:void(0);"
                        class="text-reset text-decoration-underline text-dark">reset link</a>.
                </p>` },
    visibleText = { script: ` <p class="visible mb-0">This is visible text</p>` },
    invisibleText = { script: `<p class="invisible mb-0">This is invisible text</p>` },
    textAlignment = {
        script: ` <p class="text-start">Start aligned text on all viewport sizes.</p>
                <p class="text-center">Center aligned text on all viewport sizes.</p>
                <p class="text-end">End aligned text on all viewport sizes.</p>

                <p class="text-sm-start">Start aligned text on viewports sized SM (small) or
                    wider.
                </p>
                <p class="text-md-start">Start aligned text on viewports sized MD (medium) or
                    wider.
                </p>
                <p class="text-lg-start">Start aligned text on viewports sized LG (large) or
                    wider.
                </p>
                <p class="text-xl-start">Start aligned text on viewports sized XL (extra-large)
                    or
                    wider.</p>>` },
    textWrappingAndOverflow = {
        script: `<div class="badge bg-primary text-wrap mb-3" style="width: 6rem;">
                    This text should wrap.
                </div>
                <p class="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
                <div class="text-nowrap bg-light border" style="width: 8rem;">
                    This text should overflow the parent.
                </div>` },
    wordBreak = {
        script: ` <p class="text-break mb-0">
                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
            </p>` };