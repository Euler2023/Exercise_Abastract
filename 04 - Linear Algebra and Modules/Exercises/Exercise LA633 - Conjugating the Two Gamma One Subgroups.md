---
title: "Exercise LA633: Conjugating the Two Gamma One Subgroups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.1, printed p. 195, PDF p. 209"
source_refs:
  - "S7/ch-5/sec-7/ex-1"
created: 2026-10-28
---

# Exercise LA633: Conjugating the Two Gamma One Subgroups

## Problem Statement

> [!question] Original Exercise 5.7.1
> Prove Lemma 5.7.2.
>
> The lemma states that $\alpha_M\Gamma_1(M)\alpha_M^{-1}=\Gamma^1(M)$, and the same formula holds with $M$ replaced by $N$. Here $\alpha_M=\operatorname{diag}(M,1)$ and $\Gamma^1(M)$ consists of integral determinant-one matrices congruent to $\left(\begin{smallmatrix}1&0\\ *&1\end{smallmatrix}\right)$ modulo $M$.

## Hints

> [!hint]- Hint 1
> Conjugation multiplies the upper-right entry by $M$ and divides the lower-left entry by $M$.

> [!hint]- Hint 2
> Prove both containments, including integrality of the inverse conjugate.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $\gamma=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\Gamma_1(M)$, $M\mid c$ and $a,d\equiv1\pmod M$. Direct multiplication gives
> $$
> \alpha_M\gamma\alpha_M^{-1}=\begin{pmatrix}a&Mb\\c/M&d\end{pmatrix}.
> $$
> Its entries are integral, its determinant is $ad-bc=1$, its diagonal entries are $1$ modulo $M$, and its upper-right entry is $0$ modulo $M$. Thus it lies in $\Gamma^1(M)$.
>
> Conversely, if $\eta=\left(\begin{smallmatrix}a&B\\C&d\end{smallmatrix}\right)\in\Gamma^1(M)$, then $M\mid B$, and
> $$
> \alpha_M^{-1}\eta\alpha_M=\begin{pmatrix}a&B/M\\MC&d\end{pmatrix}\in\Gamma_1(M).
> $$
> This proves equality, with no restriction on the positive integer $M$. Replacing $M$ by $N$ gives the second assertion. The argument also includes $M=1$, when both groups are $\mathrm{SL}_2(\mathbb Z)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.1, printed p. 195 / PDF p. 209]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Lemma 5.7.2 and the definition of $\Gamma^1(M)$ are on printed p.191/PDF p.205.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
