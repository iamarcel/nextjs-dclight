import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <script src="https://cdn.datacamp.com/datacamp-light-latest.min.js"></script>
    </Head>
    <div data-datacamp-exercise data-lang="r">
      <code data-type="pre-exercise-code">
        # This will get executed each time the exercise gets initialized
        b = 6
      </code>
      <code data-type="sample-code">
        # Create a variable a, equal to 5


        # Print out a


      </code>
      <code data-type="solution">
        # Create a variable a, equal to 5
        a {`<-`} 5

        # Print out a
            print(a)
      </code>
      <code data-type="sct">
        test_object("a")
        test_function("print")
        success_msg("Great job!")
      </code>
      <div data-type="hint">Use the assignment operator (<code>{`<-`}</code>) to create the variable <code>a</code>.</div>
    </div>
  </div>
)

export default Index