import "./Inputs.css";

import Input from "../components/Input";

function Inputs({ id }) {
    return (
        <main id={id}>
            <h1>Inputs</h1>

            <br />

            <div>
                <p class="tag-info">&lt;Input /&gt;</p>
                <Input label="Label" />
            </div>

            <br />

            <div>
                <p class="tag-info">&lt;Input error /&gt;</p>
                <Input label="Label" error />
            </div>

            <br />

            <div>
                <p class="tag-info">&lt;Input disabled /&gt;</p>
                <Input label="Label" disabled />
            </div>

            <br />
            
            <div>
                <p class="tag-info">&lt;Input helperText="Some interesting text" /&gt;</p>
                <Input label="Label" helperText="Some interesting text" />
            </div>
    
            <div>
                <p class="tag-info">&lt;Input helperText="Some interesting text" /&gt;</p>
                <Input label="Label" helperText="Some interesting text" error />
            </div>

            <br />

            <div>
                <p class="tag-info">&lt;Input value="text" /&gt;</p>
                <Input label="Label" value="text" />
            </div>

            <br />

            <div>
                <p class="tag-info">&lt;Input size="sm" /&gt;</p>
                <Input label="Label" size="sm" />
            </div>

            <div>
                <p class="tag-info">&lt;Input size="md" /&gt;</p>
                <Input label="Label" size="md" />
            </div>

            <br />

            <div>
                <p class="tag-info">&lt;Input fullWidth /&gt;</p>
                <Input label="Label" fullWidth />
            </div>

            <br />

            <div>
                <p class="tag-info">&lt;Input multiline row="4" /&gt;</p>
                <Input label="Label" multiline rows="4" />
            </div>

            <div>
                <p class="tag-info">&lt;Input multiline row="8" error /&gt;</p>
                <Input label="Label" multiline rows="8" error />
            </div>

            <br />

            <footer>
                <p>created by <a href="https://github.com/DaniellaRoz" target="_blank">DaniellaRoz</a> - devChallenges.io</p>
            </footer>
        </main>
    );
}

export default Inputs;
