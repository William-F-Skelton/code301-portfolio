(function(ctx) {
  const resumeController = {};

  resumeController.init = () => {
    View.showResume();
  }
  ctx.resumeController = resumeController;
}(window))
