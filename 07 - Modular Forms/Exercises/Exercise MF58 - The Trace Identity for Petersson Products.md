---
title: "Exercise MF58: The Trace Identity for Petersson Products"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.4, Exercise 5.4.4, printed p. 184, PDF p. 198"
source_refs:
  - "S7/ch-5/sec-4/ex-4"
created: 2026-10-28
---

# Exercise MF58: The Trace Identity for Petersson Products

## Problem Statement

> [!question] Original Exercise 5.4.4
> Let $\Gamma'\subset\Gamma\subset SL_2(\mathbb Z)$ be congruence subgroups with $-I\in\Gamma'$. Suppose that $f\in S_k(\Gamma)\subset S_k(\Gamma')$ and that $g\in S_k(\Gamma')$. Letting $\Gamma=\coprod_i\Gamma'\alpha_i$, recall the trace of $g$ from Section 5.1, $\operatorname{tr}g=\sum_ig[\alpha_i]_k\in S_k(\Gamma)$. Show that
> $$
> V_{\Gamma'}\langle f,g\rangle_{\Gamma'}=V_\Gamma\langle f,\operatorname{tr}g\rangle_\Gamma.
> $$
> (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> A fundamental region for $\Gamma'$ is a union of the $\alpha_i$-translates of one for $\Gamma$, up to boundary sets.

> [!hint]- Hint 2
> After changing variable by $\alpha_i$, modularity simplifies the transformed $f$ while the transformed $g$ becomes $g[\alpha_i]_k$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\mathcal F$ be the union of full-modular fundamental-region translates for $\Gamma$. Since both groups contain $-I$, the matrix cosets in the question are exactly the effective cosets, so $\bigcup_i\alpha_i\mathcal F$ is an integration region for $\Gamma'$ with boundary overlaps of measure zero. Absolute convergence follows from cusp decay.
>
> For $z=x+iy$ and $\alpha_i\in SL_2(\mathbb Z)$, invariance of hyperbolic measure and the imaginary-part formula give
> $$
> \begin{aligned}
> &f(\alpha_i z)\overline{g(\alpha_i z)}(\operatorname{Im}\alpha_i z)^k\\
> &\quad=(f[\alpha_i]_k)(z)\overline{(g[\alpha_i]_k)(z)}y^k
> =f(z)\overline{(g[\alpha_i]_k)(z)}y^k.
> \end{aligned}
> $$
> The last equality uses $\alpha_i\in\Gamma$ and the hypothesis on $f$. Hence
> $$
> \begin{aligned}
> V_{\Gamma'}\langle f,g\rangle_{\Gamma'}
> &=\sum_i\int_{\alpha_i\mathcal F}f(z)\overline{g(z)}y^k\,d\mu(z)\\
> &=\int_{\mathcal F}f(z)\overline{\sum_ig[\alpha_i]_k(z)}y^k\,d\mu(z)\\
> &=V_\Gamma\langle f,\operatorname{tr}g\rangle_\Gamma.
> \end{aligned}
> $$
> The finite trace is modular for $\Gamma$ because right multiplication by an element of $\Gamma$ permutes the left cosets $\Gamma'\backslash\Gamma$; changing a representative on the left by $\Gamma'$ does not change its slash term. Each term is cuspidal, so the trace is indeed in $S_k(\Gamma)$ as used in the final pairing.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.4.4, printed p. 184 / PDF p. 198]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The normalized product and quotient-integration convention were checked on printed pp. 182–183 / PDF pp. 196–197. Appendix A, printed p. 422 / PDF p. 433, suggests combining the two coset decompositions.
- **Central hypothesis:** The printed condition $-I\in\Gamma'$ prevents a factor from ineffective matrix cosets. The proof uses it explicitly.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
