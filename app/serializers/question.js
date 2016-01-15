import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin,
  {
    attrs: {
     comments: { embedded: 'always' },
     answers: { embedded: 'always' }
   }
  }
);