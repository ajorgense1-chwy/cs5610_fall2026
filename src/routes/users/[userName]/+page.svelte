<script>
    import {page} from '$app/state'
    import { randomFunction } from '@ahjorgen167/arcade-core';

    // import {generateRandomUserId} from '../../../lib/helpers/names'
    // import image from 'static/randompic.jpg'    
</script>

<div>
    Welcome, {page.params.userName}
    User ID: {randomFunction()}
    <!-- <div>{image}</div>   -->
</div>