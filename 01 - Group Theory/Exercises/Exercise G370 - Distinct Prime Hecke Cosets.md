---
title: "Exercise G370: Distinct Prime Hecke Cosets"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.3, printed p. 176, PDF p. 190"
source_refs:
  - "S7/ch-5/sec-2/ex-3"
created: 2026-10-28
---

# Exercise G370: Distinct Prime Hecke Cosets

## Problem Statement

> [!question] Original Exercise 5.2.3
> Show that the $\gamma_{2,j}$ represent distinct cosets.
>
> **Referenced representatives, printed p. 170 / PDF p. 184.** The cosets are in $\Gamma_3\backslash\Gamma_1(N)$, where $\Gamma_3=\Gamma_1(N)\cap\Gamma^0(p)$. The representatives are
> $$
> \gamma_{2,j}=\begin{pmatrix}1&j\\0&1\end{pmatrix}\quad(0\leq j<p),
> \qquad\gamma_{2,\infty}=\begin{pmatrix}mp&n\\N&1\end{pmatrix}
> $$
> with $mp-nN=1$; include the last representative only if $p\nmid N$.

## Hints

> [!hint]- Hint 1
> Equality of left cosets is equivalent to membership of a product $\gamma_{2,j}\gamma_{2,l}^{-1}$ in $\Gamma_3$.

> [!hint]- Hint 2
> For two finite indices the upper right entry is $j-l$. For the exceptional comparison it is nonzero modulo $p$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For finite indices $j,l$,
> $$
> \gamma_{2,j}\gamma_{2,l}^{-1}=\begin{pmatrix}1&j-l\\0&1\end{pmatrix}.
> $$
> This belongs to $\Gamma_3$ exactly when $p\mid j-l$. Since $0\leq j,l<p$, this is equivalent to $j=l$. Thus the finite-index cosets are pairwise distinct.
>
> Suppose $p\nmid N$. For a finite index $j$,
> $$
> \gamma_{2,j}\gamma_{2,\infty}^{-1}
> =\begin{pmatrix}1-jN&-n+jmp\\-N&mp\end{pmatrix}.
> $$
> Its upper right entry equals $-n$ modulo $p$. The Bézout relation gives $-nN\equiv1\pmod p$, so $n\not\equiv0\pmod p$. The product therefore does not belong to $\Gamma^0(p)$ and hence not to $\Gamma_3$. The exceptional coset is distinct from every finite-index coset. These comparisons prove exactly the asserted distinctness.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.3, printed p. 176 / PDF p. 190]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The coset criterion and all representatives were checked on printed p. 170 / PDF p. 184. Completeness, a different assertion, follows there by choosing $j\equiv ba^{-1}\pmod p$ when $p\nmid a$, and the exceptional representative when $p\mid a$.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
