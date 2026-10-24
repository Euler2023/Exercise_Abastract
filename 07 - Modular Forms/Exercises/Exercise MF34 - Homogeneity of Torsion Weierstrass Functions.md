---
title: "Exercise MF34: Homogeneity of Torsion Weierstrass Functions"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.5, Exercise 1.5.8, printed p. 44, PDF p. 59; Section 1.5 definitions, printed pp. 38–42, PDF pp. 53–57"
source_refs:
  - "S7/ch-1/sec-5/ex-8"
created: 2026-10-24
---

# Exercise MF34: Homogeneity of Torsion Weierstrass Functions

## Problem Statement

> [!question] Original Exercise 1.5.8
> (a) Show that the function $F_2^{\bar v}$ from the section is degree-$2$ homogeneous with respect to $\Gamma(N)$.
>
> (b) Similarly, show that the functions $F_0^{\bar v}$, $F_0^{\bar d}$, and $F_0$ are degree-$0$ homogeneous with respect to $\Gamma(N)$, $\Gamma_1(N)$, and $\Gamma_0(N)$ respectively.
>
> **Referenced definitions, printed pp. 41–42 / PDF pp. 56–57.** Let $N>1$, $v=(c_v,d_v)\in\mathbb Z^2$ with nonzero reduction modulo $N$, and $d\not\equiv0\pmod N$. For the indicated enhanced curves define
> $$
> F_2^{\bar v}(\mathbb C/\Lambda,(P,Q))=\frac1{N^2}\wp_\Lambda(c_vP+d_vQ),
> $$
> $$
> F_0^{\bar v}(\mathbb C/\Lambda,(P,Q))=\frac{g_2(\Lambda)}{g_3(\Lambda)}\wp_\Lambda(c_vP+d_vQ),
> \qquad
> F_0^{\bar d}(\mathbb C/\Lambda,Q)=\frac{g_2(\Lambda)}{g_3(\Lambda)}\wp_\Lambda(dQ),
> $$
> $$
> F_0(\mathbb C/\Lambda,C)=\frac{g_2(\Lambda)}{g_3(\Lambda)}\sum_{Q\in C-\{0\}}\wp_\Lambda(Q).
> $$
> Here $g_2=60G_4$, $g_3=140G_6$ and the superscripts are labels, not exponents. The meaning of degree-$k$ homogeneous is $F(\mathbb C/m\Lambda,m\text{(data)})=m^{-k}F(\mathbb C/\Lambda,\text{(data)})$ for every $m\ne0$, as in (1.12).

> [!warning] Source issue and scope
> Two qualifications to the referenced definitions must remain visible. First, $g_2/g_3$ may have poles at $g_3=0$; the three weight-$0$ formulas are meromorphic functions, or ordinary complex-valued functions on $g_3\ne0$. The section itself explicitly permits meromorphic functions on printed p. 42 / PDF p. 57.
>
> Second, the same source page prints the auxiliary expansion $F_0(\mathbb C/\Lambda,C)=\sum_{d=1}^{N-1}F_0^{\bar d}(\mathbb C/\Lambda,dQ)$. This applies $d$ twice. The intended expansion has $Q$ as the second argument, as proved below. For $N=4$ its $d=2$ printed term even asks for $\wp_\Lambda(4Q)$ at a lattice point (and $2Q$ is not an order-$4$ marking). The original exercise above is unchanged.

## Hints

> [!hint]- Hint 1
> Substitute $m\omega$ for each lattice summation variable. The scaling weights of $\wp$, $g_2$, and $g_3$ are $2$, $4$, and $6$.

> [!hint]- Hint 2
> The ratio $g_2/g_3$ scales by $m^2$, cancelling the $m^{-2}$ from $\wp$. Multiplication by $m$ also bijects $C-\{0\}$ with $mC-\{0\}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> From the normally convergent defining lattice series, replacing every nonzero $\omega\in\Lambda$ by $m\omega$ gives
> $$
> \begin{aligned}
> \wp_{m\Lambda}(mz)
> &=\frac1{(mz)^2}+\sum_{\omega\in\Lambda-\{0\}}
> \left(\frac1{(mz-m\omega)^2}-\frac1{(m\omega)^2}\right)\\
> &=m^{-2}\wp_\Lambda(z).
> \end{aligned}
> $$
> Likewise the absolutely convergent sums give $G_j(m\Lambda)=m^{-j}G_j(\Lambda)$ for $j=4,6$, so $g_2(m\Lambda)=m^{-4}g_2(\Lambda)$ and $g_3(m\Lambda)=m^{-6}g_3(\Lambda)$.
>
> **(a).** For the scaled markings,
> $$
> F_2^{\bar v}(\mathbb C/m\Lambda,(mP,mQ))
> =\frac1{N^2}\wp_{m\Lambda}\bigl(m(c_vP+d_vQ)\bigr)
> =m^{-2}F_2^{\bar v}(\mathbb C/\Lambda,(P,Q)).
> $$
> Changing a representative of $v$ modulo $N$ changes its argument by a lattice element. A nonzero $v$ on a basis gives a nonzero torsion point, so $\wp$ has no pole there. Scaling preserves the basis and Weil pairing, by Exercise 1.3.3(d).
>
> **(b).** Wherever $g_3(\Lambda)\ne0$,
> $$
> \frac{g_2(m\Lambda)}{g_3(m\Lambda)}\wp_{m\Lambda}(mz)
> =\frac{m^{-4}g_2(\Lambda)}{m^{-6}g_3(\Lambda)}m^{-2}\wp_\Lambda(z)
> =\frac{g_2(\Lambda)}{g_3(\Lambda)}\wp_\Lambda(z).
> $$
> Apply this first to $z=c_vP+d_vQ$, then to $z=dQ$. The marked arguments scale as required, proving degree $0$ for $F_0^{\bar v}$ and $F_0^{\bar d}$. For the subgroup version, $R\mapsto mR$ bijects the nonzero members of $C$ with those of $mC$, so termwise the same cancellation proves
> $$
> F_0(\mathbb C/m\Lambda,mC)=F_0(\mathbb C/\Lambda,C).
> $$
> This is independent of a chosen generator. The equalities also hold as meromorphic identities at zeros of $g_3$. If $C=\langle Q\rangle$, the valid generator expansion is
> $$
> F_0(\mathbb C/\Lambda,C)=\sum_{d=1}^{N-1}F_0^{\bar d}(\mathbb C/\Lambda,Q),
> $$
> since each $dQ$ occurs once in the original sum.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions]]

## Notes

Independent derivation of the homogeneity assertions. The scaling identities also follow from Section 1.4, printed pp. 31–34 / PDF pp. 46–49. These are functions of enhanced lattice presentations with specified homogeneity; degree-$2$ functions are not functions of bare isomorphism classes. The exercise does not prove holomorphy at all cusps.
