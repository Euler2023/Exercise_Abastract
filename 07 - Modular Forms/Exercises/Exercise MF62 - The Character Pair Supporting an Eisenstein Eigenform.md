---
title: "Exercise MF62: The Character Pair Supporting an Eisenstein Eigenform"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.9, Exercise 5.9.6, printed p. 208, PDF p. 222"
source_refs:
  - "S7/ch-5/sec-9/ex-6"
created: 2026-10-28
---

# Exercise MF62: The Character Pair Supporting an Eisenstein Eigenform

## Problem Statement

> [!question] Original Exercise 5.9.6
> (a) Let $g\in E_k(N,\chi)$ be a normalized eigenform, with $k\ge3$. Use the method of Exercise 5.8.6(a) to show that there exists some pair $(\psi,\varphi)$ with $\psi\varphi=\chi$ modulo $N$ such that $a_p(E_k^{\psi,\varphi})=a_p(g)$ for all primes $p\nmid N/(uv)$; here $E_k^{\psi,\varphi}$ is scaled so that $a_1(E_k^{\psi,\varphi})=1$.
>
> (b) Prove that the pair $\psi,\varphi$ in part (a) is unique. (A hint for this exercise is at the end of the book.)
>
> (c) Use the method of Exercise 5.8.6(b) to show that the normalized eigenform $g$ lies in the space $E_k(N,\psi,\varphi)$.
>
> Here $\psi,\varphi$ are primitive of conductors $u,v$, and $E_k(N,\psi,\varphi)$ is spanned by their degeneracy translates indexed by $tuv\mid N$.

## Hints

> [!hint]- Hint 1
> On a fixed pair block, $T_p$ acts by $\psi(p)+\varphi(p)p^{k-1}$ when $p$ divides no degeneracy index.

> [!hint]- Hint 2
> For uniqueness, take arbitrarily large primes in each unit residue class modulo $N$, divide by $p^{k-1}$, and take a limit.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $F_{\psi,\varphi}$ for the normalized basic Eisenstein eigenform. The Eisenstein basis theorem gives a direct sum $E_k(N,\chi)=\bigoplus_{(\psi,\varphi)}E_k(N,\psi,\varphi)$, over primitive pairs with product lifting to $\chi$. We use this basis theorem from Theorem 4.5.2 and the coefficient eigenvalue identity from Proposition 5.2.3, with
> $$
> a_p(F_{\psi,\varphi})=\psi(p)+\varphi(p)p^{k-1}.
> $$
> **(a).** If $p\nmid N/(uv)$, $p$ divides no allowed shift index $t$, so the prime coefficient formula shows $T_pF_{\psi,\varphi}(t\tau)=a_p(F_{\psi,\varphi})F_{\psi,\varphi}(t\tau)$. If no pair has the asserted agreement for all these primes, select a disagreeing prime for each pair and take the product of operators $T_p-a_p(F_{\psi,\varphi})I$. The factors commute, and the factor selected for a block annihilates that entire block. The product therefore annihilates $g$. Yet on the normalized eigenform $g$ it is multiplication by the product of the nonzero differences $a_p(g)-a_p(F_{\psi,\varphi})$. This contradiction proves existence.
>
> **(b).** Suppose two primitive pairs have the asserted property. In particular their eigenvalues agree for every $p\nmid N$. Fix a unit residue class $a$ modulo $N$. Dirichlet's theorem on primes in arithmetic progressions supplies infinitely many primes $p\equiv a\pmod N$, tending to infinity. Along these primes,
> $$
> \psi(a)+\varphi(a)p^{k-1}=\psi'(a)+\varphi'(a)p^{k-1}.
> $$
> Divide by $p^{k-1}$ and let $p\to\infty$. Since $k-1>0$, $\varphi(a)=\varphi'(a)$; substitution gives $\psi(a)=\psi'(a)$. This holds in every unit residue class, so their lifted characters agree. Each lifted Dirichlet character has a unique primitive inducing character and conductor (the primitive-character theorem); hence $\psi=\psi'$ and $\varphi=\varphi'$ as primitive characters. This proves uniqueness of the ordered pair. Dirichlet's theorem and uniqueness of primitive inducing characters are the named external inputs here; no cuspidal multiplicity theorem is needed.
>
> **(c).** Write $g=\sum_Bg_B$ by the pair blocks. For $p\nmid N$, every block is scalar under $T_p$ with the basic pair's eigenvalue. Comparing components in $T_pg=a_p(g)g$ gives $(a_p(F_B)-a_p(g))g_B=0$. If $g_B\ne0$, its eigenvalues agree with those of $g$ at every good prime, and hence with the pair from (a). The uniqueness proof in (b), which used only such primes, identifies $B$ with that pair. All other components vanish. This proves the required membership.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Eisenstein Series]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.9.6, printed p. 208 / PDF p. 222]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The pair-block decomposition is on printed p.206/PDF p.220, and its Hecke action on printed p.207/PDF p.221. The primitive Eisenstein basis theorem, Dirichlet's theorem, and primitive-character uniqueness are imported inputs; Strong Multiplicity One for cusp forms is not used in this argument.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
