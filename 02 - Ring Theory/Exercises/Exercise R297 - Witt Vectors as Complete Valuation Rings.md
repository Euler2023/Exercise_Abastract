---
title: "Exercise R297: Witt Vectors as Complete Valuation Rings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - witt-vectors
  - discrete-valuation-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 17, printed pp. 497-498, PDF pp. 512-513"
created: 2026-09-25
---

# Exercise R297: Witt Vectors as Complete Valuation Rings

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 17
> (a) (Witt vectors again). Let $k$ be a perfect field of characteristic $p$. We use the Witt vectors as described in the exercises of Chapter VI. One can define an absolute value on $W(k)$, namely $|x|=p^{-r}$ if $x_r$ is the first non-zero component of $x$. Show that this is an absolute value, obviously discrete, defined on the ring, and which can be extended at once to the quotient field. Show that this quotient field is complete, and note that $W(k)$ is the valuation ring. The maximal ideal consists of those $x$ such that $x_0=0$, i.e. is equal to $pW(k)$.
>
> (b) Assume that $F$ has characteristic $0$. Map each vector $x\in W(k)$ on the element
>
> $$
> \sum_{i=0}^{\infty}\xi_i^{p^{-i}}p^i,
> $$
>
> where $\xi_i$ is a representative of $x_i$ in the special system of Exercise 15. Show that this map is an embedding of $W(k)$ into $\mathfrak o$.

> [!warning] Source issue: incorrect exercise cross-reference
> The printed part (b) says “special system of Exercise 15,” but that representative system is constructed in **Exercise 16**. The displayed series uses powers $p^i$, not powers of the uniformizer $\pi$; this distinction matters when $F$ is ramified over $\mathbb Q_p$.

## Hints

> [!hint]- Hint 1: Identify the valuation filtration
> Perfectness makes Witt Frobenius $F$ bijective. Combine $p=VF$ with the shift $V$ to show that the vectors whose first $r$ components vanish are exactly $p^rW(k)$.

> [!hint]- Hint 2: Reduce products to units
> A Witt vector with nonzero initial component is a unit. Write every nonzero vector uniquely as $p^r u$ with $u$ a unit.

> [!hint]- Hint 3: Check the map in part (b) as a ring map
> The representative $\xi_i^{p^{-i}}$ means the Teichmüller representative of the inverse Frobenius image of $x_i$. Use the universal Witt addition and multiplication polynomials to compare finite truncations of the series modulo a power of $\pi$ whose exponent grows with the truncation index.

## Solution

> [!success]- Complete derivation from the Chapter VI Witt identities
> **(a) Valuation and completeness.** We use the Witt identities established in Chapter VI: the first-component map $W(k)\to k$ is a ring homomorphism; $V(x_0,x_1,\ldots)=(0,x_0,x_1,\ldots)$; $p=VF$; and a vector is a unit exactly when its first component is nonzero. Because $k$ is perfect, $F$ is an automorphism. It follows that
>
> $$
> \{x:x_0=\cdots=x_{r-1}=0\}=V^rW(k)=p^rW(k).
> $$
>
> Every nonzero $x\in W(k)$ therefore has a unique decomposition $x=p^r u$ with $u$ a unit and $r\ge0$. Define $v(x)=r$ and $v(0)=\infty$. If $x=p^r u$ and $y=p^s w$, then $xy=p^{r+s}uw$ and $uw$ is a unit, so $v(xy)=v(x)+v(y)$. Also $p^rW(k)$ is an ideal, hence $v(x+y)\ge\min(v(x),v(y))$. Thus $|x|=p^{-v(x)}$ (and $|0|=0$) is a non-archimedean discrete absolute value on $W(k)$.
>
> In the quotient field $E=\operatorname{Frac}W(k)$ set $v(x/y)=v(x)-v(y)$; multiplicativity makes this well-defined. Every element of $E$ is $p^m u$ for some $m\in\mathbb Z$ and $u\in W(k)^\times$. Consequently $W(k)=\{z\in E:v(z)\ge0\}$ and its maximal ideal is $\{z:v(z)>0\}=pW(k)=\{x:x_0=0\}$.
>
> The Witt ring is the inverse limit of its finite-coordinate truncations: $W(k)=\varprojlim_N W(k)/V^NW(k)$. Since $V^NW(k)=p^NW(k)$, this is precisely $p$-adic completeness. A Cauchy sequence in $E$ is eventually bounded below in valuation; multiplying it by a fixed power of $p$ moves its tail into $W(k)$, where it converges. Division by that power of $p$ gives its limit in $E$. Hence $E$ is complete.
>
> **(b) The Teichmüller series.** Assume the corrected hypotheses of Exercise 16: $F$ is a complete discretely valued field of characteristic zero with perfect residue field $k$ of characteristic $p$. Let $\tau:k\to\mathfrak o$ be its unique multiplicative Teichmüller representative map. Then the printed formula means
>
> $$
> \Theta(x)=\sum_{i=0}^{\infty}p^i\tau(x_i^{p^{-i}}),\qquad x=(x_0,x_1,\ldots)\in W(k).
> $$
>
> The series converges $\pi$-adically since $v_\pi(p)>0$; in a ramified field $v_\pi(p)$ may exceed $1$, so replacing $p^i$ by $\pi^i$ would give the wrong map.
>
> We now prove that $\Theta$ respects both ring operations. The only imported algebraic input is the existence of the integral $p$-typical Witt coordinate polynomials $S_i,P_i$ and their ghost identities, constructed in Chapter VI, Exercises 46–48. Put $w_n(Z_0,\ldots,Z_n)=\sum_{i=0}^np^iZ_i^{p^{n-i}}$. For fixed $n$ and $0\le i\le n$ define $X_{i,n}=\tau(x_i^{p^{-n}})$ and $Y_{i,n}=\tau(y_i^{p^{-n}})$. Multiplicativity of $\tau$ gives
>
> $$
> w_n(X_{0,n},\ldots,X_{n,n})
> =\sum_{i=0}^np^i\tau(x_i^{p^{-i}})=:\Theta_n(x),
> $$
>
> and similarly $w_n(Y_{0,n},\ldots,Y_{n,n})=\Theta_n(y)$.
>
> Write $c_i=S_i(x,y)$ for the $i$-th Witt coordinate of $x+y$, and evaluate the same integral polynomial on the lifted coordinates to obtain $C_{i,n}=S_i(X_{0,n},\ldots,X_{i,n};Y_{0,n},\ldots,Y_{i,n})\in\mathfrak o$. Reduction modulo $\pi$ gives
>
> $$
> \overline{C_{i,n}}=S_i(x_0^{p^{-n}},\ldots;y_0^{p^{-n}},\ldots)=c_i^{p^{-n}}.
> $$
>
> The last equality uses that inverse Frobenius is a field automorphism of the perfect field $k$ and that the integer coefficients of $S_i$ reduce to $\mathbb F_p$. Therefore $C_{i,n}\equiv\tau(c_i^{p^{-n}})\pmod\pi$. Exercise 15, applied to the power $p^{n-i}$, and the Frobenius identity for $\tau$ give
>
> $$
> C_{i,n}^{p^{n-i}}\equiv\tau(c_i^{p^{-i}})\pmod{\pi^{n-i+1}}.
> $$
>
> Multiplying by $p^i$ raises the $\pi$ order by $i v_\pi(p)$, so the difference in this $i$-th summand has $\pi$ order at least $n-i+1+i v_\pi(p)\ge n+1$. The integral ghost identity $w_n(S(X_n,Y_n))=w_n(X_n)+w_n(Y_n)$ is an exact equality in $\mathfrak o$. Comparing its summands as above yields
>
> $$
> \Theta_n(x+y)\equiv\Theta_n(x)+\Theta_n(y)\pmod{\pi^{n+1}}.
> $$
>
> Replacing $S_i$ by the integral Witt multiplication polynomial $P_i$ and using $w_n(P(X_n,Y_n))=w_n(X_n)w_n(Y_n)$ gives, by the identical congruence argument, $\Theta_n(xy)\equiv\Theta_n(x)\Theta_n(y)\pmod{\pi^{n+1}}$. Since the truncations $\Theta_n$ converge $\pi$-adically, both congruences become equalities in the limit. Thus $\Theta$ is additive and multiplicative. This argument works for every ramification index $v_\pi(p)\ge1$; it does not silently replace $\pi$-adic precision with $p$-adic precision.
>
> Finally, if $x_r$ is the first nonzero component of $x$, then
>
> $$
> \Theta(x)=p^r\tau(x_r^{p^{-r}})+p^{r+1}z
> $$
>
> for some $z\in\mathfrak o$. The Teichmüller factor is a unit, so $\Theta(x)\ne0$. Thus $\Theta$ is an injective ring homomorphism, as required.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[05 - Galois Theory/Exercises/Exercise Gal130 - The Functor of Witt Vectors|Exercise Gal130]]
- [[05 - Galois Theory/Exercises/Exercise Gal132 - Structure of the Ring of Witt Vectors over Fields of Characteristic p|Exercise Gal132]]
- [[02 - Ring Theory/Exercises/Exercise R296 - Teichmuller Representatives in Complete DVRs|Exercise R296]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Routing:** The valuation filtration and the Teichmüller embedding are statements about complete local rings; their primary calculations are ring-theoretic.
- **Source and proof status:** [S2, Ch. XII, Exercise 17, printed pp. 497–498, PDF pp. 512–513]. Part (a) follows from the linked, previously derived Chapter VI Witt identities. Part (b)'s convergence, ring-homomorphism property, and injectivity are derived here from Exercises 15–16 and the integral Witt addition/multiplication polynomials with ghost identities, which are the explicitly named earlier Chapter VI input. No Cohen embedding theorem is assumed.
- **Hypothesis boundary:** The series in part (b) requires $\operatorname{char}F=0$, $\operatorname{char}k=p>0$, and $k$ perfect. The previous exercise omits the latter two conditions, so they are stated explicitly in the solution.
