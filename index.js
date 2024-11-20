module.exports = {
    rules: {
        'jira-issue-in-scope': function (input, _context, prefix = '') {
			const regex = prefix
                ? new RegExp(`^${prefix}-[1-9][0-9]*$`)
                : /^((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-[1-9][0-9]*)$/g;

            const isValid = input.scope && regex.test(input.scope);

            return [
                isValid,
                prefix
                    ? `Your scope should contain a JIRA issue number with the prefix "${prefix}" (e.g., feat(${prefix}-123): description)`
                    : 'Your scope should contain a JIRA issue number in the format "ABC-123" (e.g., feat(ABC-123): description)'
            ];
        }
    }
};
