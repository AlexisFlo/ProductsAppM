import { Platform } from 'react-native';
import { Database, Model } from '@nozbe/watermelondb';
import { date, field, text } from '@nozbe/watermelondb/decorators'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './model/schema';
import migrations from './model/migrations';
import Post from './model/Post' // I'll import my models here

// First , create the adapter to the underlaying database:

const adapter = new SQLiteAdapter({
  schema,
  // (You might want comment it out for development purposes)
  migrations,
  // (optional database name or file system path)
  // dbNAme: 'myapp',
  jsi: true,
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failded to load -- offer the user to reload the app or Log out
  }
})
// Then, make a watermelon database from it!
const database = new Database({
  adapter,
  modelClasses:[Post] // You'll add Models to Watermelon here
})

// Associations

class Post extends Model {
  static table = 'posts'
  static associations = {
    posts: { type: 'belongs_to', key: 'post_id' },
  }

  @text('title') title
  @text('body') body
  @field('is_pinned') isPinned
  @date('last_event_at') lastEventAt
}