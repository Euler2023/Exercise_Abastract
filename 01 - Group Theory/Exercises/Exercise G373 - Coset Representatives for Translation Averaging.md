---
title: "Exercise G373: Coset Representatives for Translation Averaging"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.2, printed p. 195, PDF p. 209"
source_refs:
  - "S7/ch-5/sec-7/ex-2"
created: 2026-10-28
---

# Exercise G373: Coset Representatives for Translation Averaging

## Problem Statement

> [!question] Original Exercise 5.7.2
> Prove Lemma 5.7.4. (A hint for this exercise is at the end of the book.)
>
> For $d\mid N$, put $\Gamma_d=\Gamma_1(N)\cap\Gamma^0(N/d)$, where $\Gamma^0(m)$ imposes upper-right entry divisible by $m$. The lemma says that representatives for $\Gamma(N)\backslash\Gamma_d$ are
> $$
> \left\{\begin{pmatrix}1&bN/d\\0&1\end{pmatrix}:0\le b<d\right\}.
> $$

## Hints

> [!hint]- Hint 1
> Reduce each matrix modulo $N$. The only possibly nonidentity entry is the upper-right entry.

> [!hint]- Hint 2
> That entry is a multiple of $N/d$, whose coefficient is determined modulo $d$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $U_b=\left(\begin{smallmatrix}1&bN/d\\0&1\end{smallmatrix}\right)$. It has determinant $1$, diagonal entries $1$, lower-left entry $0$, and upper-right entry divisible by $N/d$, so $U_b\in\Gamma_d$.
>
> For any $\gamma=\left(\begin{smallmatrix}a&B\\c&e\end{smallmatrix}\right)\in\Gamma_d$, the defining conditions give $a,e\equiv1\pmod N$, $c\equiv0\pmod N$, and $B=tN/d$ for some integer $t$. Choose the unique $b\in\{0,\ldots,d-1\}$ congruent to $t$ modulo $d$. Then $B\equiv bN/d\pmod N$, whence $\gamma\equiv U_b\pmod N$. Therefore $\gamma U_b^{-1}\in\Gamma(N)$ and $\Gamma(N)\gamma=\Gamma(N)U_b$. This proves completeness.
>
> If $\Gamma(N)U_b=\Gamma(N)U_{b'}$, then
> $$
> U_bU_{b'}^{-1}=\begin{pmatrix}1&(b-b')N/d\\0&1\end{pmatrix}\in\Gamma(N),
> $$
> so $d\mid b-b'$. The chosen range forces $b=b'$. This proves uniqueness and index $[\Gamma_d:\Gamma(N)]=d$. The proof remains valid for $d=1$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.2, printed p. 195 / PDF p. 209]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Lemma 5.7.4 is on printed p.192/PDF p.206. Its appendix hint, “Work modulo $N$,” was checked on printed p.422/PDF p.433.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
