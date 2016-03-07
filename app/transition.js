export default function(){  
  this.transition(
    this.fromRoute('forum.questions.index'),
    this.toRoute('forum.questions.newest'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}