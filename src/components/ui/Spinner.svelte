<script>
    export let message;
</script>

<div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
    <span class="progress-meter" style="width:75%">
        <span class="progress-meter-text">{message}</span>
    </span>
</div>