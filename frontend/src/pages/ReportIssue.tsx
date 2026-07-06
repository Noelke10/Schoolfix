function ReportIssue() {
  return (
    <main>
      <h1>How can Facilities help?</h1>
      <p>Report an issue in under 30 seconds.</p>

      <form>
        <div>
          <label htmlFor="location">Location</label>
          <input id="location" type="text" placeholder="Classroom 204" />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select id="category">
            <option value="">Select a category</option>
            <option value="maintenance">Maintenance</option>
            <option value="custodial">Custodial</option>
            <option value="event">Event Setup</option>
            <option value="safety">Safety Concern</option>
            <option value="it">IT / Technology</option>
          </select>
        </div>

        <div>
          <label htmlFor="description">What is the issue?</label>
          <textarea
            id="description"
            placeholder="Projector will not turn on..."
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </main>
  );
}

export default ReportIssue;
