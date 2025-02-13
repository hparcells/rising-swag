'use client';

import { migrateData, resetDatabase } from '@/actions/migrate';

function MigratePage() {
  return (
    <p>
      <button onClick={migrateData}>Migrate</button>
      <button onClick={resetDatabase}>Reset Database</button>
    </p>
  );
}

export default MigratePage;
