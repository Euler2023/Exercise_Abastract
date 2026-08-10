---
title: "Exercise Gal7: Galois Groups of Nested Radicals over Q(omega)"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - kummer-extensions
  - solvability-by-radicals
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.14, printed p. 509, PDF p. 521"
created: 2026-08-11
---

# Exercise Gal7: Galois Groups of Nested Radicals over Q(omega)

## Problem Statement

> [!question] Exercise 9.14
> Let $F=\mathbb Q(\omega)$, where $\omega=e^{2\pi i/3}$. Determine the Galois group over $F$ of the splitting field of
> $$
> \text{(a) }\sqrt[3]{2+\sqrt2},
> \qquad
> \text{(b) }\sqrt{2+\sqrt[3]2}.
> $$

## Hints

> [!hint]- Hint 1
> In part (a), first adjoin $\sqrt2$ and then the cube roots of both conjugate radicands $2\pm\sqrt2$.

> [!hint]- Hint 2
> In part (b), put $a=\sqrt[3]2$ and adjoin square roots of the three conjugates $2+a$, $2+\omega a$, and $2+\omega^2a$.

> [!hint]- Hint 3
> Identify the resulting semidirect products by decomposing the diagonal and product-one subgroups.

## Solution

> [!success]- Solution
> **(a)** Put
> $$
> s=\sqrt2,\qquad E=F(s),\qquad
> A=2+s,\qquad B=2-s,
> $$
> and choose $u^3=A$, $v^3=B$. Because $F$ contains all cube roots of unity, the splitting field is
> $$
> K=E(u,v).
> $$
> The classes of $A$ and $B$ are independent in $E^\times/E^{\times3}$. To see this, write
> $$
> \varepsilon=1+s,\qquad A=s\varepsilon,\qquad B=s\varepsilon^{-1}.
> $$
> Suppose that $A^mB^n$ is a cube in $E$. A valuation at a prime above $s$ gives
> $$
> m+n\equiv0\pmod3.
> $$
> After removing a cube power of $s$, it follows that $\varepsilon^{m-n}$ is a cube in $E$. Taking the norm from $E$ to $\mathbb Q(s)$ and using the standard Pell-unit calculation
> $$
> \mathcal O_{\mathbb Q(\sqrt2)}^\times
> =\{\pm(1+\sqrt2)^k:k\in\mathbb Z\}
> $$
> shows that $\varepsilon^{2(m-n)}$ can be a cube only if $3\mid(m-n)$. Since $3$ is odd, the two congruences imply $3\mid m$ and $3\mid n$. Thus $[A]$ and $[B]$ are independent cube classes. Kummer theory gives
> $$
> \operatorname{Gal}(K/E)\cong C_3\times C_3,
> \qquad [K:E]=9.
> $$
> Since $[E:F]=2$, the full group has order $18$. Let $\rho$ multiply $u$ by $\omega$ and fix $v$, let $\lambda$ multiply $v$ by $\omega$ and fix $u$, and let $\tau$ exchange $s$ and $-s$ and exchange $u$ and $v$. Then
> $$
> \tau\rho\tau^{-1}=\lambda,\qquad
> \tau\lambda\tau^{-1}=\rho.
> $$
> Therefore
> $$
> \operatorname{Gal}(K/F)
> \cong(C_3\times C_3)\rtimes C_2,
> $$
> where $C_2$ swaps the two $C_3$ factors. The diagonal subgroup $\langle\rho\lambda\rangle$ is central, while $\tau$ inverts $\rho\lambda^{-1}$. Hence
> $$
> \operatorname{Gal}(K/F)\cong C_3\times S_3.
> $$
>
> **(b)** Put $a=\sqrt[3]2$ and $E=F(a)$. The element $2$ is not a cube in $F$: if $b^3=2$ for some $b\in F$, then $b$ is an algebraic integer and
> $$
> N_{F/\mathbb Q}(b)^3=N_{F/\mathbb Q}(2)=4,
> $$
> which is impossible because $N_{F/\mathbb Q}(b)\in\mathbb Z$. Thus $x^3-2$ is irreducible over $F$. Since $F$ contains $\omega$, the extension $E/F$ is cyclic of degree $3$. Set
> $$
> U_0=2+a,\qquad U_1=2+\omega a,\qquad U_2=2+\omega^2a,
> $$
> and choose $r_j^2=U_j$. The splitting field is
> $$
> K=E(r_0,r_1,r_2).
> $$
> The three square classes $[U_0],[U_1],[U_2]$ are independent in $E^\times/E^{\times2}$. Consider the three distinct primes
> $$
> \mathfrak q_j=(5,\,a+2\omega^{-j})\qquad(j=0,1,2).
> $$
> The prime $5$ is inert in $F=\mathbb Q(\omega)$, with residue field $\mathbb F_{25}$. In that field the three distinct roots of $X^3-2$ are $-2\omega^{-j}$, so these ideals are precisely the three primes of $E$ above $5$.
> Indeed, modulo $\mathfrak q_j$ one has $a\equiv-2\omega^{-j}$, so $U_j\equiv0$, whereas
> $$
> U_k\equiv2(1-\omega^{k-j})\ne0
> \pmod{\mathfrak q_j}
> \qquad(k\ne j).
> $$
> Moreover
> $$
> U_0U_1U_2=(2+a)(2+\omega a)(2+\omega^2a)=10.
> $$
> The prime $5$ is unramified in $E$ because it divides neither the discriminant of $x^3-2$ nor that of $\mathbb Q(\omega)$. Hence $v_{\mathfrak q_j}(U_j)=v_{\mathfrak q_j}(10)=1$, while $v_{\mathfrak q_j}(U_k)=0$ for $k\ne j$. Any nonempty product of the $U_j$ therefore has an odd valuation at one of these primes and cannot be a square. Thus
> $$
> \operatorname{Gal}(K/E)\cong C_2^3,
> \qquad [K:E]=8.
> $$
> A generator of $\operatorname{Gal}(E/F)\cong C_3$ cyclically permutes $U_0,U_1,U_2$ and hence the three sign-change generators of $C_2^3$. Therefore
> $$
> \operatorname{Gal}(K/F)\cong C_2^3\rtimes C_3.
> $$
> The simultaneous sign change is a central $C_2$. The product-one sign changes form a Klein four group on which $C_3$ cyclically permutes the three nonidentity elements, giving $A_4$. Thus
> $$
> \operatorname{Gal}(K/F)\cong C_2\times A_4.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

The exercise statement is source material from [S1, Ch. 16, §9, Ex. 9.14, printed p. 509, PDF p. 521]. The solutions are independent Kummer-style derivations. The Pell-unit description of $\mathbb Q(\sqrt2)$ is an external standard input; the prime-valuation argument in part (b) is proved explicitly in the solution. As a computational verification only, SageMath 9.0 found absolute Galois groups $S_3\times S_3$ of order $36$ for $x^6-4x^3+2$ and $C_2\times S_4$ of order $48$ for $x^6-6x^4+12x^2-10$; fixing $\mathbb Q(\omega)$ gives the index-two groups obtained above.
