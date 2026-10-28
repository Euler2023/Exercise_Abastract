---
title: "Exercise G376: The Intrinsic Full Level Eisenstein Sum"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.1, Exercise 4.1.1, printed p. 111, PDF p. 125"
source_refs:
  - "S7/ch-4/sec-1/ex-1"
created: 2026-10-28
---

# Exercise G376: The Intrinsic Full Level Eisenstein Sum

## Problem Statement

> [!question] Original Exercise 4.1.1
> Show that the intrinsic sum for $E_k$ in (4.2) agrees with the sum in (4.1).
>
> For $k\ge3$, the two sums are
> $$
> E_k(\tau)=\frac12\sum_{\substack{(c,d)\in\mathbb Z^2\\\gcd(c,d)=1}}(c\tau+d)^{-k},\qquad E_k(\tau)=\frac12\sum_{\gamma\in P_+\backslash\mathrm{SL}_2(\mathbb Z)}j(\gamma,\tau)^{-k},
> $$
> where $P_+=\{\left(\begin{smallmatrix}1&n\\0&1\end{smallmatrix}\right):n\in\mathbb Z\}$ and $j(\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right),\tau)=c\tau+d$.

## Hints

> [!hint]- Hint 1
> Send a matrix to its bottom row.

> [!hint]- Hint 2
> Bézout's identity completes every primitive row to a determinant-one matrix; two completions differ by adding an integer multiple of the bottom row to the top row.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> If $\gamma=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)$ has determinant one, every common divisor of $c,d$ divides $ad-bc=1$, so its bottom row is primitive. Left multiplication by $\left(\begin{smallmatrix}1&n\\0&1\end{smallmatrix}\right)$ leaves this row unchanged. Thus the row map is defined on left cosets of $P_+$.
>
> Conversely, given $\gcd(c,d)=1$, Bézout gives integers $a,b$ with $ad-bc=1$, producing such a matrix. If another top row $(a',b')$ completes the same bottom row, then $(a'-a)d=(b'-b)c$. If $c,d$ are both nonzero, coprimality gives $a'-a=nc$ and $b'-b=nd$ for an integer $n$. If either entry is zero, the other is $\pm1$, and the same conclusion follows directly. Hence the two matrices differ by left multiplication by an element of $P_+$. This proves a bijection between the two indexing sets.
>
> For the corresponding indices $j(\gamma,\tau)^{-k}=(c\tau+d)^{-k}$. Absolute convergence of the lattice Eisenstein sum for $k>2$ permits this reindexing, proving the equality. The two rows $(c,d)$ and $(-c,-d)$ remain distinct in this bijection because $-I\notin P_+$; the factor $1/2$ is therefore the same on both sides, and odd weights cancel in either description.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.1.1, printed p. 111 / PDF p. 125]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Equations (4.1), (4.2), $P_+$, and the assumption $k\ge3$ are on printed p.110/PDF p.124.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
