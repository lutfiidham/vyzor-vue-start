export let
    BasicPagination = {
        script: `
     <nav aria-label="Page navigation">
                    <ul class="pagination mb-0">
                        <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                    </ul>
                </nav>` },
    PaginationWithIcons = {
        script: `
                    <nav aria-label="Page navigation">
                    <ul class="pagination mb-0">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                                <span aria-hidden="true"><i class="bx bx-chevron-left"></i></span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Next">
                                <span aria-hidden="true"><i class="bx bx-chevron-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>` },
    PaginationSizing = {
        script: `
    <nav aria-label="...">
                    <ul class="pagination pagination-sm mb-0">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    </ul>
                </nav>
                <nav aria-label="...">
                    <ul class="pagination mb-0">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    </ul>
                </nav>
                <nav aria-label="...">
                    <ul class="pagination pagination-lg mb-0">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    </ul>
                </nav>` },
    CenterRightAlignedPagination = {
        script: `
   <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-end mb-0">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>` },
    ActiveAndDisabledStates = {
        script: `
     <nav aria-label="..." class="me-3">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="javascript:void(0);">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">Next</a>
                    </li>
                </ul>
            </nav>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">Next</a>
                    </li>
                </ul>
            </nav>` },
    PaginationStyle1 = {
        script: `
     <nav aria-label="Page navigation" class="pagination-style-1">
                <ul class="pagination mb-0 flex-wrap">
                    <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);">
                            <i class="ri-arrow-left-s-line align-middle"></i>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">
                            <i class="bi bi-three-dots"></i>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">21</a></li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">
                            <i class="ri-arrow-right-s-line align-middle"></i>
                        </a>
                    </li>
                </ul>
            </nav>` },
    PaginationStyle2 = {
        script: `
    <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                    <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);">
                            Prev
                        </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">
                            <i class="bi bi-three-dots"></i>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                    <li class="page-item">
                        <a class="page-link text-primary" href="javascript:void(0);">
                            next
                        </a>
                    </li>
                </ul>
            </nav>` },
    PaginationStyle3 = {
        script: `
      <nav aria-label="Page navigation" class="pagination-style-3">
                    <ul class="pagination mb-0 flex-wrap">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                Prev
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="bi bi-three-dots"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>
                        <li class="page-item">
                            <a class="page-link text-primary" href="javascript:void(0);">
                                next
                            </a>
                        </li>
                    </ul>
                </nav>` },
    PaginationStyle4 = {
        script: `
    &lt;nav aria-label="Page navigation" class="pagination-style-4">
        &lt;ul class="pagination mb-0 flex-wrap">
            &lt;li class="page-item disabled">
                &lt;a class="page-link" href="javascript:void(0);">
                    Prev
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item active">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">
                    &lt;i class="bi bi-three-dots">&lt;/i>
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">16&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">17&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link text-primary" href="javascript:void(0);">
                    next
                &lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` };