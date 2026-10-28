---
title: "Exercise LA600: A Conjugate Group with an Irregular Cusp"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.2, Exercise 3.2.5, printed p. 77, PDF p. 91"
source_refs:
  - "S7/ch-3/sec-2/ex-5"
created: 2026-10-28
---

# Exercise LA600: A Conjugate Group with an Irregular Cusp

## Problem Statement

> [!question] Original Exercise 3.2.5
> Let $\alpha=\begin{bmatrix}1&-1\\2&-1\end{bmatrix}$ and let $\Gamma=\alpha^{-1}\Gamma_1(4)\alpha$. Show that $\Gamma_\infty=\left\langle-\begin{bmatrix}1&1\\0&1\end{bmatrix}\right\rangle$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Every integral determinant-one matrix fixing infinity is $\epsilon T^n$ with $\epsilon=\pm1$.

> [!hint]- Hint 2
> Compute $\alpha T^n\alpha^{-1}$ and impose the two diagonal congruences modulo $4$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Because $\Gamma\subset SL_2(\mathbb Z)$, any element of its infinity stabilizer has the form $\epsilon T^n$, where $\epsilon\in\{1,-1\}$ and $n\in\mathbb Z$.
>
> The determinant of $\alpha$ is $1$, and direct multiplication gives
> $$
> \alpha^{-1}=\begin{pmatrix}-1&1\\-2&1\end{pmatrix},\qquad
> \alpha T^n\alpha^{-1}
> =\begin{pmatrix}1-2n&n\\-4n&1+2n\end{pmatrix}.
> $$
> The lower left entry is divisible by $4$. The remaining conditions for $\epsilon\alpha T^n\alpha^{-1}\in\Gamma_1(4)$ are
> $$
> \epsilon(1-2n)\equiv\epsilon(1+2n)\equiv1\pmod4.
> $$
> Since $1-2n$ and $1+2n$ are congruent modulo $4$, these reduce to one condition. If $n$ is even, it requires $\epsilon=1$. If $n$ is odd, it requires $\epsilon=-1$. Equivalently, $\epsilon=(-1)^n$. Hence
> $$
> \Gamma_\infty=\{(-1)^nT^n:n\in\mathbb Z\}=\langle-T\rangle.
> $$
> The effective cusp width is $1$, because $-T$ translates by one, while the least positive translation matrix in $\Gamma$ is $T^2$. This is an irregular cusp. Finally $\alpha(\infty)=1/2$, so it gives the irregular cusp $1/2$ of $\Gamma_1(4)$ mentioned in the text.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 77 / PDF 91. The solution above is independently derived.
- **Check:** The generator $-T$ has no sign ambiguity: it induces translation by $1$, but the matrix $T$ itself fails the diagonal congruences after conjugation.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
