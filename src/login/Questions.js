const Questions = () => {
  return (
    <section className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div class="accordion accordion-flush" id="question">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Where exactly are you located?
              </button>
            </h2>
            <div
              id="question-one"
              class="accordion-collapse collapse"
              data-bs-parent="#question"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolorem, soluta quo laudantium, non perspiciatis, consequuntur
                quasi corrupti harum natus in rem deleniti ea ipsum quaerat sit?
                Temporibus, eos quaerat.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                How much does it cause to attend?
              </button>
            </h2>
            <div
              id="question-two"
              class="accordion-collapse collapse"
              data-bs-parent="#question"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolorem, soluta quo laudantium, non perspiciatis, consequuntur
                quasi corrupti harum natus in rem deleniti ea ipsum quaerat sit?
                Temporibus, eos quaerat. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dolore sapiente ut dolor facere tempora,
                repellendus eveniet! Perspiciatis deleniti aliquam ipsum harum
                eaque sequi amet vero? Reiciendis doloribus qui cumque
                inventore.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                How do I need to know?
              </button>
            </h2>
            <div
              id="question-three"
              class="accordion-collapse collapse"
              data-bs-parent="#question"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolorem, soluta quo laudantium, non perspiciatis, consequuntur
                quasi corrupti harum natus in rem deleniti ea ipsum quaerat sit?
                Temporibus, eos quaerat.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                How do I sign Up?
              </button>
            </h2>
            <div
              id="question-four"
              class="accordion-collapse collapse"
              data-bs-parent="#question"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolorem, soluta quo laudantium, non perspiciatis, consequuntur
                quasi corrupti harum natus in rem deleniti ea ipsum quaerat sit?
                Temporibus, eos quaerat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reiciendis, assumenda?
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
              >
                Will you help me find a job?
              </button>
            </h2>
            <div
              id="question-five"
              class="accordion-collapse collapse"
              data-bs-parent="#question"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolorem, soluta quo laudantium, non perspiciatis, consequuntur
                quasi corrupti harum natus in rem deleniti ea ipsum quaerat sit?
                Temporibus, eos quaerat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
