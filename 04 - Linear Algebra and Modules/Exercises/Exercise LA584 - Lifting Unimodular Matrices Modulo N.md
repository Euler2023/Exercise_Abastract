---
title: "Exercise LA584: Lifting Unimodular Matrices Modulo N"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.2, printed p. 21, PDF p. 36; Appendix A hint, printed p. 413, PDF p. 424"
source_refs:
  - "S7/ch-1/sec-2/ex-2"
created: 2026-10-24
---

# Exercise LA584: Lifting Unimodular Matrices Modulo N

## Problem Statement

> [!question] Original Exercise 1.2.2
> Let $N$ be a positive integer. Let $\gamma\in SL_2(\mathbb Z/N\mathbb Z)$ be given. Lift $\gamma$ to a matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}\in M_2(\mathbb Z)$.
>
> (a) Show that $\gcd(c,d,N)=1$. Show that $\gcd(c',d')=1$ for some $c'=c+sN$ and $d'=d+tN$ where $s,t\in\mathbb Z$. (A hint for this exercise is at the end of the book.)
>
> (b) Show that some lift $\begin{pmatrix}a+kN&b+lN\\c'&d'\end{pmatrix}$ of $\gamma$ lies in $SL_2(\mathbb Z)$. Thus the map $SL_2(\mathbb Z)\to SL_2(\mathbb Z/N\mathbb Z)$ surjects.

## Hints

> [!hint]- Hint 1
> A common divisor of $c,d,N$ divides $ad-bc$ and hence divides $1$.

> [!hint]- Hint 2
> Choose $c'\ne0$. For each prime divisor of $c'$ not dividing $N$, avoid the one forbidden residue of $t$ modulo that prime; apply the Chinese Remainder Theorem.

> [!hint]- Hint 3
> After choosing a primitive bottom row, use Bezout's identity to change the determinant by an arbitrary multiple of $N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> **(a)** Since $ad-bc\equiv1\pmod N$, every common divisor of $c,d,N$ divides $1$, proving the first assertion. Choose $s=0$ if $c\ne0$, and $s=1$ otherwise, so that $c'=c+sN\ne0$. Then $\gcd(c',d,N)=1$.
>
> If a prime $p\mid c'$ divides $N$, then $p\nmid d$, so $p\nmid d+Nt$ for every $t$. For each of the finitely many primes $p\mid c'$ with $p\nmid N$, choose a residue $t_p$ different from $-dN^{-1}$ modulo $p$. The Chinese Remainder Theorem gives an integer $t$ with all these residues. Thus no prime divisor of $c'$ divides $d'=d+Nt$, and $\gcd(c',d')=1$.
>
> **(b)** The determinant $D=ad'-bc'$ satisfies $D=1+Nm$ for some $m\in\mathbb Z$. Bezout's identity for $c',d'$ gives integers $k,l$ satisfying $kd'-lc'=-m$. Hence
> $$
> (a+kN)d'-(b+lN)c'=D+N(kd'-lc')=1.
> $$
> The resulting integral matrix reduces to $\gamma$. This proves surjectivity. The construction also works for $N=1$; equivalently the target then consists of a single matrix and the identity is a lift.
>
> As a concrete check, the residue matrix $\begin{pmatrix}1&0\\0&1\end{pmatrix}$ modulo $5$ can start with bottom row $(5,6)$. It is already primitive; changing its top row $(1,0)$ to $(21,25)$ gives determinant $126-125=1$, preserving the residue matrix.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

The statement and Appendix A hint (printed p. 413 / PDF p. 424) were checked against page images. The complete construction above is independent; its external elementary inputs are Bezout's identity and the Chinese Remainder Theorem. Routing follows the integral determinant-lifting calculation.
