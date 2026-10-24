---
title: "Exercise G349: Quotient Actions on Level Structures"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.5, Exercise 1.5.3, printed p. 43, PDF p. 58; Theorem 1.5.1, printed pp. 38–40, PDF pp. 53–55"
source_refs:
  - "S7/ch-1/sec-5/ex-3"
created: 2026-10-24
---

# Exercise G349: Quotient Actions on Level Structures

## Problem Statement

> [!question] Original Exercise 1.5.3
> Since the group containments mentioned in the previous exercises are normal, it follows that the quotient $\Gamma_1(N)/\Gamma(N)\cong\mathbb Z/N\mathbb Z$ (cf. Section 1.2) acts on the modular curve $Y(N)$ by multiplication from the left, and similarly for $\Gamma_0(N)/\Gamma_1(N)\cong(\mathbb Z/N\mathbb Z)^*$ and $Y_1(N)$. Describe the corresponding action of $\mathbb Z/N\mathbb Z$ on the moduli space $S(N)$, and similarly for $(\mathbb Z/N\mathbb Z)^*$ and $S_1(N)$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use an upper unipotent matrix for the additive quotient. For the multiplicative quotient the residue parameter is the bottom-right entry $d$.

> [!hint]- Hint 2
> Transport the canonical torsion markings back from $E_{\gamma\tau}$ to $E_\tau$ by multiplication by $c\tau+d$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> For $b\in\mathbb Z/N\mathbb Z$ and $d\in(\mathbb Z/N\mathbb Z)^*$ the answers are
> $$
> b:[E,(P,Q)]\longmapsto[E,(P+bQ,Q)],\qquad d:[E,Q]\longmapsto[E,dQ].
> $$
> The first preserves a basis because $\begin{pmatrix}1&b\\0&1\end{pmatrix}$ is invertible modulo $N$. Bilinearity and alternation give $e_N(P+bQ,Q)=e_N(P,Q)$, so its target belongs to $S(N)$. The second preserves exact order $N$ because $d$ is a unit. Any isomorphism of enhanced curves commutes with these integral linear combinations, proving well-definedness on classes.
>
> For the quotient identification in Section 1.2, choose $\gamma=T^b$. It sends $\tau$ to $\tau+b$ without changing its lattice, and the canonical pair becomes $((\tau+b)/N,1/N)=(P+bQ,Q)$.
>
> For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(N)$ put $m=c\tau+d$. The equality $m\Lambda_{\gamma\tau}=\Lambda_\tau$ identifies $E_{\gamma\tau}$ with $E_\tau$, carrying its marked point $1/N$ to $m/N=c\tau/N+d/N$. Since $N\mid c$, this is $dQ$. Thus these are precisely the transported left quotient actions. The parameter depends only on the coset: changing $b$ by $N$ adds $NQ=0$, and changing $d$ by a multiple of $N$ does not change $dQ$.
>
> Finally composition gives $P+b_2Q+b_1Q=P+(b_1+b_2)Q$ and $d_1(d_2Q)=(d_1d_2)Q$; zero and one act identically and the inverse parameters reverse the actions. This verifies all action axioms. The actions on isomorphism classes need not be faithful: for example $[E,Q]=[E,-Q]$ via $[-1]$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[01 - Group Theory/Concepts/Group Actions]]

## Notes

Routed to Group Theory because quotient actions and their compatibility with equivalence relations do the main work. The normal quotient identifications are Exercise 1.2.3; the transported actions and their normalizations are independently derived here. Appendix A, printed p. 415 / PDF p. 426, confirms the additive shear formula.
