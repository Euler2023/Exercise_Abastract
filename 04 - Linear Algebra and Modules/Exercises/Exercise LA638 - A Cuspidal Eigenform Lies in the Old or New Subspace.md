---
title: "Exercise LA638: A Cuspidal Eigenform Lies in the Old or New Subspace"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.8, Exercise 5.8.4, printed p. 200, PDF p. 214"
source_refs:
  - "S7/ch-5/sec-8/ex-4"
created: 2026-10-28
---

# Exercise LA638: A Cuspidal Eigenform Lies in the Old or New Subspace

## Problem Statement

> [!question] Original Exercise 5.8.4
> Show that if $f\in S_k(\Gamma_1(N))$ is an eigenform then $f$ is old or new. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Project $f$ into the oldspace and newspace. Both spaces are stable under every Hecke operator.

> [!hint]- Hint 2
> A nonzero cusp eigenform has $a_1\ne0$, since $a_n=a_1(T_n f)$. Two cusp eigenforms with all the same eigenvalues are therefore proportional.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write the Petersson orthogonal decomposition $f=g+h$, with $g$ old and $h$ new. Proposition 5.6.2 preserves both subspaces under every $T_n$ and diamond. Comparing the two components in $T_nf=\lambda_nf$ gives $T_ng=\lambda_ng$ and $T_nh=\lambda_nh$; the same holds for diamonds. Thus each nonzero component is a cusp eigenform with precisely the same Hecke eigenvalues.
>
> For any such component $u$, the first-coefficient identity $a_1(T_nu)=a_n(u)$ implies $a_n(u)=\lambda_na_1(u)$ for all $n\ge1$. If $a_1(u)=0$, all its Fourier coefficients vanish, and the identity theorem gives $u=0$. Therefore nonzero $u$ has $a_1(u)\ne0$.
>
> Suppose both $g$ and $h$ are nonzero. Their normalized forms $g/a_1(g)$ and $h/a_1(h)$ have coefficients $\lambda_n$ at every positive index. Both have zero constant term, so they are equal. This puts a nonzero vector in the intersection of the oldspace and newspace, which is $0$ by positive definiteness of the Petersson inner product. The contradiction proves that one component is zero. Hence $f$ lies wholly in the oldspace or wholly in the newspace.
>
> Here “new” means membership in the newspace. Definition 5.8.1 additionally requires normalization for the term “newform”; an arbitrary nonzero scalar multiple need not itself be normalized.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.8.4, printed p. 200 / PDF p. 214]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The old/new assertion is on printed p.198/PDF p.212; the appendix hint was checked on printed p.423/PDF p.434. This argument uses equality at all $T_n$, and does not invoke Strong Multiplicity One.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
