---
title: "Exercise Rep112: Character Table of the Dihedral Group by Induction"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.12, printed p. 322, PDF p. 334"
created: 2026-08-27
---

# Exercise Rep112: Character Table of the Dihedral Group by Induction

## Problem Statement

> [!question] Miscellaneous Exercise M.12
> Derive the character table of the dihedral group $D_n$ using induced representations from $C_n$.

## Hints

> [!hint]- Hint 1
> Reflection conjugates the character $\lambda_k$ of $C_n$ to $\lambda_{-k}$.

## Solution

> [!success]- Solution
> Let $D_n=\langle r,s\mid r^n=s^2=1,\ srs=r^{-1}\rangle$ and $\zeta=e^{2\pi i/n}$. The characters $\lambda_k(r)=\zeta^k$ and $\lambda_{-k}$ form a conjugate pair unless $2k\equiv0\pmod n$. Their induction is irreducible of degree $2$, with
>
> $$
> \chi_k(r^j)=\zeta^{kj}+\zeta^{-kj}=2\cos\frac{2\pi kj}{n},
> \qquad \chi_k(sr^j)=0.
> $$
>
> If $n$ is odd, there are two linear characters and $k=1,\ldots,(n-1)/2$. If $n$ is even, there are four linear characters, obtained by independently sending $r,s$ to $\pm1$, and $k=1,\ldots,n/2-1$. These rows have the correct number, are orthonormal, and their degree squares equal $2n$, so they form the full table. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.12, printed p. 322, PDF p. 334].

