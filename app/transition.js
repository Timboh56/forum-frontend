export default function(){  
  this.transition(
    this.fromRoute('main'),
    this.toRoute('files'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}