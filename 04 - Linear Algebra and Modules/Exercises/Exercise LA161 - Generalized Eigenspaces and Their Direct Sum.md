---
title: "Exercise LA161: Generalized Eigenspaces and Their Direct Sum"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - generalized-eigenspaces
  - jordan-form
  - direct-sums
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.8, printed p. 131, PDF p. 143"
created: 2026-08-23
---

# Exercise LA161: Generalized Eigenspaces and Their Direct Sum

## Problem Statement

> [!question] Exercise M.8
> Let $T$ act on a finite-dimensional complex vector space $V$.
>
> (a) For an eigenvalue $\lambda$, prove that the generalized eigenspace $V_\lambda$ (generalized eigenvectors together with zero) is $T$-invariant. (b) Prove that $V$ is the direct sum of its generalized eigenspaces.

## Hints

> [!hint]- Hint 1
> Use $V_\lambda=\ker(T-\lambda I)^N$ for sufficiently large $N$ and the coprimeness of powers of distinct linear factors.

## Solution

> [!success]- Solution
> (a) In finite dimension the increasing kernels stabilize, so $V_\lambda=\ker(T-\lambda I)^N$ for some $N$. Since $T$ commutes with every polynomial in $T$, this kernel is $T$-invariant.
>
> (b) Put $f_i(t)=(t-\lambda_i)^{m_i}$ and $p(t)=\prod_i f_i(t)$. The factors are pairwise coprime. By the polynomial Chinese remainder theorem, choose $e_i(t)$ satisfying
>
> $$
> e_i\equiv1\pmod{f_i},
> \qquad
> e_i\equiv0\pmod{f_j}\quad(j\ne i),
> \qquad
> \sum_i e_i\equiv1\pmod p.
> $$
>
> Cayley–Hamilton gives $p(T)=0$. Hence the operators $E_i=e_i(T)$ sum to $I$, satisfy $E_iE_j=0$ for $i\ne j$, and have image in $\ker f_i(T)=V_{\lambda_i}$. Every $v$ is therefore the sum $\sum_iE_iv$ of generalized-eigenspace components. If $\sum_iv_i=0$ with $v_i\in V_{\lambda_i}$, applying $E_j$ gives $v_j=0$, so the sum is direct. Thus
>
> $$
> V=\bigoplus_i V_{\lambda_i}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Imported result:** Cayley–Hamilton, proved earlier in Artin Chapter 4, is used to construct the primary decomposition.
- **Source status:** [S1, Ch. 4, Misc. Problems, Ex. M.8, printed p. 131, PDF p. 143]; independent proof roadmap with the Bézout projection construction stated explicitly.
