import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { setGenerator } from '@nozbe/watermelondb/utils/common/randomId';


// I'll import my models here
import schema from '../model/schema';
import migrations from '../model/migrations';
import Post from '../model/Post' 

// First , create the adapter to the underlaying database:
const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations,
  // (optional database name or file system path)
  // (optional database name or file system path)
  // dbNAme: 'myapp',
  jsi: true,
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failded to load -- offer the user to reload the app or Log out
  }
});

// Then, make a watermelon database from it!
const database = new Database({
  adapter,
  modelClasses:[Post] // You'll add Models to Watermelon here
})

