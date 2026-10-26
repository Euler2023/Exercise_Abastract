---
title: "Exercise R427: Square-Zero Ideals in Delta Rings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - delta-rings
source: "Shachar Carmeli, Thomas Nikolaus, and Allen Yuan, Maps between spherical group rings, Inventiones mathematicae, 2026, Definition 2.1 and Proposition 2.10, unpaginated online-first version, PDF pp. 6, 9"
paper_refs:
  - "paper/carmeli-nikolaus-yuan-2026/definition-2.1"
  - "paper/carmeli-nikolaus-yuan-2026/proposition-2.10"
created: 2026-10-26
---

# Exercise R427: Square-Zero Ideals in Delta Rings

## Problem Statement

> [!question] Adapted from Proposition 2.10, with an added example
> Fix a prime $p$. Put
> $$
> C_p(X,Y)=\frac{(X+Y)^p-X^p-Y^p}{p}
> =\sum_{j=1}^{p-1}\frac{\binom pj}{p}X^jY^{p-j}\in\mathbb Z[X,Y].
> $$
> A delta ring at $p$ is a commutative ring $A$ with identity and an operation $\delta:A\to A$ such that
> $$
> \begin{aligned}
> \delta(0)&=\delta(1)=0,\\
> \delta(x+y)&=\delta(x)+\delta(y)-C_p(x,y),\\
> \delta(xy)&=x^p\delta(y)+y^p\delta(x)+p\delta(x)\delta(y).
> \end{aligned}
> $$
> The polynomial $C_p$ has integral coefficients, so these identities do not require $p$ to be invertible. Let $I\subseteq A$ be an ideal satisfying $I^2=0$ and $\delta(I)\subseteq I$, and put $\varphi(x)=x^p+p\delta(x)$.
>
> (a) Show that $\varphi$ is a unital ring endomorphism lifting Frobenius modulo $p$. Prove that $\delta:I\to I$ is additive and $\varphi$-semilinear:
> $$
> \delta(xa)=\varphi(x)\delta(a)\qquad(x\in A,\ a\in I).
> $$
>
> (b) Prove the first-order addition formula
> $$
> \delta(x+a)=\delta(x)+\delta(a)-x^{p-1}a
> \qquad(x\in A,\ a\in I).
> $$
> Deduce that $a\mapsto1+a$ identifies the additive group $I$ with the multiplicative group $1+I$, and that
> $$
> \delta(1+a)=0\quad\Longleftrightarrow\quad\delta(a)=a.
> $$
>
> (c) In $B=\mathbb Z[\varepsilon]/(\varepsilon^2)$ define a ring endomorphism by $\varphi(n)=n$ for $n\in\mathbb Z$ and $\varphi(\varepsilon)=p\varepsilon$. Show that it determines a delta structure, compute $\delta(n+m\varepsilon)$, and verify parts (a) and (b) for $I=(\varepsilon)$. Determine which units $1+m\varepsilon$ have delta equal to zero.

## Hints

> [!hint]- Hint 1
> When $a,b\in I$, all monomials in $C_p(a,b)$ vanish. In $C_p(x,a)$, the only potentially nonzero term is the term of degree one in $a$.

> [!hint]- Hint 2
> In the product identity, use $a^p=0$ to combine $x^p\delta(a)$ and $p\delta(x)\delta(a)$. In part (c), the ring $B$ has no $p$-torsion, so dividing $\varphi(z)-z^p\in pB$ by $p$ gives a uniquely defined element. Expand $(n+m\varepsilon)^p$ before making this division.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation of Proposition 2.10 and the stated additional consequences. Parts (a) and (b) use the delta identities directly and allow $p$-torsion. Part (c) uses the explicitly verified absence of $p$-torsion in $B$.
>
> **(a) Frobenius and semilinearity.** The additive delta identity gives
> $$
> \begin{aligned}
> \varphi(x+y)
> &=(x+y)^p+p\delta(x)+p\delta(y)-pC_p(x,y)\\
> &=x^p+p\delta(x)+y^p+p\delta(y)
> =\varphi(x)+\varphi(y).
> \end{aligned}
> $$
> The product identity gives
> $$
> \begin{aligned}
> \varphi(xy)
> &=x^py^p+p x^p\delta(y)+p y^p\delta(x)+p^2\delta(x)\delta(y)\\
> &=(x^p+p\delta(x))(y^p+p\delta(y))
> =\varphi(x)\varphi(y).
> \end{aligned}
> $$
> Also $\varphi(1)=1$ and $\varphi(x)\equiv x^p\pmod{pA}$, proving the endomorphism and Frobenius-lift claims.
>
> If $a,b\in I$, every monomial $a^jb^{p-j}$, for $1\le j\le p-1$, lies in $I^p\subseteq I^2=0$. Thus $C_p(a,b)=0$, and
> $$
> \delta(a+b)=\delta(a)+\delta(b).
> $$
> Since $\delta(0)=0$ and $\delta(I)\subseteq I$, this is a homomorphism of additive groups. For $x\in A$ and $a\in I$ we have $a^p=0$, because $p\ge2$. Therefore
> $$
> \delta(xa)=x^p\delta(a)+a^p\delta(x)+p\delta(x)\delta(a)
> =\varphi(x)\delta(a).
> $$
> This is the required semilinearity.
>
> **(b) First-order terms and units.** The coefficient of $a$ in $C_p(x,a)$ is $\binom p{p-1}/p=1$. Every other summand contains $a^2$ and vanishes, so
> $$
> C_p(x,a)=x^{p-1}a.
> $$
> Substitution in the addition identity proves the formula for $\delta(x+a)$. The argument includes $p=2$, where $C_2(x,a)=xa$.
>
> For $a,b\in I$, the product law becomes $(1+a)(1+b)=1+(a+b)$, and $(1+a)^{-1}=1-a$. Hence $a\mapsto1+a$ is a group isomorphism $I\to1+I$. Setting $x=1$ in the formula just proved gives
> $$
> \delta(1+a)=\delta(1)+\delta(a)-a=\delta(a)-a.
> $$
> This proves the last equivalence.
>
> **(c) An integral dual-number example.** The assignment $\varepsilon\mapsto p\varepsilon$ respects $\varepsilon^2=0$ and fixes the integers, so it defines a unital ring endomorphism of $B$. Every element has a unique form $n+m\varepsilon$ with $n,m\in\mathbb Z$, giving a free abelian basis $1,\varepsilon$. In particular multiplication by $p$ is injective.
>
> Binomial expansion gives
> $$
> \varphi(n+m\varepsilon)=n+pm\varepsilon,\qquad
> (n+m\varepsilon)^p=n^p+pn^{p-1}m\varepsilon.
> $$
> Fermat's congruence $n^p\equiv n\pmod p$ shows that their difference belongs to $pB$. Thus
> $$
> \delta(n+m\varepsilon)
> =\frac{n-n^p}{p}+(1-n^{p-1})m\varepsilon.
> $$
> To justify that this defines a delta structure, use the identities
> $$
> p\delta(z)=\varphi(z)-z^p
> $$
> for $z=x,y,x+y,xy$, together with additivity and multiplicativity of $\varphi$. Subtraction gives $p$ times the desired addition identity and product identity. Cancelling $p$, which is legitimate in $B$, proves both identities; $\delta(0)=\delta(1)=0$ follows in the same way.
>
> Taking $n=0$ yields $\delta(m\varepsilon)=m\varepsilon$, so $I$ is a delta ideal. On $I$ the delta operation is the identity. For $x=n+m\varepsilon$ and $a=s\varepsilon$,
> $$
> \delta(xa)=\delta(ns\varepsilon)=ns\varepsilon
> =\varphi(x)\delta(a).
> $$
> Moreover, since $x^{p-1}a=n^{p-1}s\varepsilon$,
> $$
> \begin{aligned}
> \delta(x+a)-\delta(x)
> &=(1-n^{p-1})s\varepsilon\\
> &=\delta(a)-x^{p-1}a,
> \end{aligned}
> $$
> verifying part (b) directly. Finally $\delta(1+m\varepsilon)=0$ for every $m\in\mathbb Z$. Every element of $1+I$ is therefore a unit of delta zero.

## Related Concepts

- [[02 - Ring Theory/Concepts/Delta Rings and Frobenius Lifts|Delta Rings and Frobenius Lifts]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]

## Notes

- **Source status:** Definition 2.1 and Proposition 2.10 were visually checked in Carmeli–Nikolaus–Yuan, *Maps between spherical group rings*, 2026 unpaginated online-first version, PDF pp. 6 and 9. Part (a)'s semilinearity and part (b)'s addition formula are the two assertions of Proposition 2.10. The unit calculation and integral dual-number example are added derivations.
- **Torsion boundary:** Recovering $\delta$ from a Frobenius lift by dividing by $p$ requires injectivity of multiplication by $p$. That requirement holds in part (c) and is not imposed on parts (a) and (b), where the delta structure is given as data. The fractions in $C_p$ specify integral polynomial coefficients, not division inside $A$.
- **Routing:** Expanding ring operations on a square-zero ideal is the primary tool. Semilinearity provides a connection with module theory but does not require a representation-theoretic argument.
- **Proof boundary:** The exercise proves Proposition 2.10's elementary algebraic assertions. It does not prove a rigidity theorem for spectra, the full exact sequence in Proposition 2.11, or a classification of rank-one units in completed group rings.
