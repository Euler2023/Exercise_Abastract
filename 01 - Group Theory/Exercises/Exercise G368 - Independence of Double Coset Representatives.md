---
title: "Exercise G368: Independence of Double Coset Representatives"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.1, Exercise 5.1.3, printed p. 167, PDF p. 181"
source_refs:
  - "S7/ch-5/sec-1/ex-3"
created: 2026-10-28
---

# Exercise G368: Independence of Double Coset Representatives

## Problem Statement

> [!question] Original Exercise 5.1.3
> Show that the weight-$k$ double coset operator $[\Gamma_1\alpha\Gamma_2]_k$ is independent of how the orbit representatives $\beta_j$ are chosen. (A hint for this exercise is at the end of the book.)
>
> **Definition 5.1.3, printed p. 165 / PDF p. 179.** For $f\in M_k(\Gamma_1)$,
> $$
> f[\Gamma_1\alpha\Gamma_2]_k=\sum_jf[\beta_j]_k,
> \qquad\Gamma_1\alpha\Gamma_2=\coprod_j\Gamma_1\beta_j.
> $$
> For $\beta=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, set $j(\beta,z)=cz+d$ and
> $$
> (f[\beta]_k)(z)=(\det\beta)^{k-1}j(\beta,z)^{-k}f(\beta z).
> $$

## Hints

> [!hint]- Hint 1
> Two representatives of the same left orbit differ by multiplication on the left by an element of $\Gamma_1$.

> [!hint]- Hint 2
> Write $\beta_j'=\gamma_j\beta_{\sigma(j)}$ and use the composition law for slash operators.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\{\beta_j\}$ and $\{\beta_j'\}$ be two complete representative sets. The orbit set is finite by Lemmas 5.1.1–5.1.2 [S7, printed p. 164 / PDF p. 178]. The representative lists differ by a permutation $\sigma$ and elements $\gamma_j\in\Gamma_1$:
> $$
> \beta_j'=\gamma_j\beta_{\sigma(j)}.
> $$
> Matrix multiplication gives $j(AB,z)=j(A,Bz)j(B,z)$ and $\det(AB)=\det A\det B$. Substituting these into the definition proves $f[AB]_k=(f[A]_k)[B]_k$. Since $f[\gamma_j]_k=f$ by modularity,
> $$
> f[\beta_j']_k=(f[\gamma_j]_k)[\beta_{\sigma(j)}]_k
> =f[\beta_{\sigma(j)}]_k.
> $$
> Summing and reindexing the finite sum by $\sigma$ proves independence.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.1.3, printed p. 167 / PDF p. 181]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** Definition 5.1.3 was checked on printed p. 165 / PDF p. 179; the Appendix A hint is on printed p. 421 / PDF p. 432.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
