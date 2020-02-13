class HomeController {
  constructor() {
    this.largeImages = ['cemetery.jpg', 'poppies.jpg', 'snake.jpg', 'sunset.jpg'];
    this.smallImages = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png'];
    this.largeImageSelected = 'cemetery.jpg';
    this.smallImageSelected = 'logo1.png';
    this.topText = 'Give your team autonomy while preserving the visual identity of your company';
    this.bottomText = 'WWW.TRADETOOLS.CO';
    this.changingElement = null;
  }

  showLargePictureModal() {
    $('#largePictureModal').modal('show');
  }

  showSmallPictureModal() {
    $('#smallPictureModal').modal('show');
  }

  startQuillEditor(target) {
    let textInit = $('#'+ target)[0].textContent;    
    $('#'+ target).hide();
    this.changingElement = target;

    let quill = new Quill('#textEditor', {
      theme: 'snow',
    });
    quill.setText(textInit);
    $('#textModal').modal('show');
  }

  saveText() {
    debugger;
    let target = this.changingElement;
    let editedText = $sce.trustAsHtml($(".ql-editor")[0].innerHTML);

    if(target === 'topText') {
      this.topText = editedText;
    } else {
      this.bottomText = editedText;
    }

    this.closeEditor();
    $('#'+ target).show();
  }

  closeEditor() {
    $("#textModal div.modal-body")[0].innerHTML = '<div id="textEditor"></div>';
    $('#textModal').modal('hide');
  }
}

export default HomeController;
