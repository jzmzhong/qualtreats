# survey_id should remain unchanged
survey_id = "SV_4TLSPrwNIjymdh3"

# the below variables should be set according to your survey specifications

# this text will appear in each question
ab_question_text = "Which of the following sounds the most natural?"
mc_question_text= "Are there any errors in this speech sample?"
trs_question_text = "Please type the sentence you hear in this audio sample."
mushra_question_text = "How natural are the following speech recordings? <br> Reference: "
mos_question_text = "Listen to this speech sample, then rate the quality of the speech."
xab_question_text = "Which of the following sounds more similar to the reference speech?"
xmos_question_text_1 = "Listen carefully to all speech recordings below in full. Then rate <i><u>how similar</u></i> the <i><u>accent</u></i> of the candidate speech recording is to the reference speech recording on a scale of 1 (completely different accent) to 5 (identical accent). Please disregard the mismatch in voice, gender, and audio quality.<br />Here is the reference speech recording:"
xmos_question_text_2 = "<br />Here is the candidate speech recording:"
# the answer options for multiple choice questions
mc_choice_text = ['Yes', 'No']

# these files should contain the urls to be embedded in questions/choices
# each file should have a filename and url per line, separated by whitespace
ab_file1 = "resources/ab-urls-1.txt"
ab_file2 = "resources/ab-urls-2.txt"
abc_file1 = "resources/abc-urls-1.txt"
abc_file2 = "resources/abc-urls-2.txt"
abc_file3 = "resources/abc-urls-3.txt"
mc_file = "resources/mc-urls.txt"
trs_file = "resources/trs-urls.txt"
mos_file = "resources/mos-urls.txt"
xab_file1 = "resources/xab-urls-1.txt"
xab_file2 = "resources/xab-urls-2.txt"
xab_file_ref = "resources/xab-urls-ref.txt"
xabc_file1 = "resources/xabc-urls-1.txt"
xabc_file2 = "resources/xabc-urls-2.txt"
xabc_file3 = "resources/xabc-urls-3.txt"
xabc_file_ref = "resources/xabc-urls-ref.txt"
xmos_file = "resources/xmos-urls.txt"
xmos_file_ref = "resources/xmos-urls-ref.txt"
# mushra filenames should be the same across folders
# audiofile urls should vary only by folder name
# any number of folders can be specified
mushra_files = "resources/mushra-urls.txt"
mushra_root = "https://groups.inf.ed.ac.uk/cstr3/cvbotinh/Mushra_example/samples"
# the hidden reference folder should be included in both mushra_folders and mushra_ref_folder
mushra_folders = ["G1","G1H","G1HA","G1TH", "G1THA"]
mushra_ref_folder = "G1THA"

# MC questions have sentence text embedded
# this file should have a filename and corresponding sentence string per line
mc_sentence_file = "resources/sentences.txt"
