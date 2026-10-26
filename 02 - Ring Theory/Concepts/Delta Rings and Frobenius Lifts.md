---
title: Delta Rings and Frobenius Lifts
aliases:
  - Delta Rings
  - p-Derivations
  - Frobenius Lifts
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - delta-rings
source: "Shachar Carmeli, Thomas Nikolaus, and Allen Yuan, Maps between spherical group rings, Inventiones mathematicae, 2026, Definitions 2.1 and 2.8, Proposition 2.10, unpaginated online-first version, PDF pp. 6, 8-9"
paper_refs:
  - "paper/carmeli-nikolaus-yuan-2026/definition-2.1"
  - "paper/carmeli-nikolaus-yuan-2026/definition-2.8"
  - "paper/carmeli-nikolaus-yuan-2026/proposition-2.10"
source_status: verified
status: not-started
created: 2026-10-26
---

# Delta Rings and Frobenius Lifts

## Definition

> [!info] A delta structure at a fixed prime
> Fix a prime $p$ and define the integral polynomial
> $$
> C_p(X,Y)=\sum_{j=1}^{p-1}\frac{\binom pj}{p}X^jY^{p-j}
> =\frac{(X+Y)^p-X^p-Y^p}{p}.
> $$
> The divisibility $p\mid\binom pj$, for $1\le j\le p-1$, makes this a polynomial in $\mathbb Z[X,Y]$. A **delta ring at $p$**, also called a **$\delta_p$-ring**, is a commutative ring $A$ with identity and an operation $\delta:A\to A$ satisfying
> $$
> \begin{aligned}
> \delta(0)&=\delta(1)=0,\\
> \delta(x+y)&=\delta(x)+\delta(y)-C_p(x,y),\\
> \delta(xy)&=x^p\delta(y)+y^p\delta(x)+p\delta(x)\delta(y).
> \end{aligned}
> $$
> A morphism of delta rings is a unital ring homomorphism commuting with $\delta$. A **delta ideal** is an ideal $I$ such that $\delta(I)\subseteq I$.

A **Frobenius lift at $p$** is a unital ring endomorphism $\varphi:A\to A$ such that $\varphi(x)\equiv x^p\pmod{pA}$ for all $x\in A$. The Frobenius map itself is the endomorphism $\bar x\mapsto\bar x^p$ of the characteristic-$p$ quotient $A/pA$.

## Intuition

The $p$th-power function fails to be additive in characteristic zero. A delta operation records its arithmetic correction so that
$$
\varphi(x)=x^p+p\delta(x)
$$
becomes additive and multiplicative. It is generally neither an additive map on all of $A$ nor an ordinary derivation. The prime $p$ is part of the structure; changing the prime changes the defining operation.

## Key Properties

1. **Every delta structure gives a Frobenius lift.** Substituting the addition identity into $(x+y)^p+p\delta(x+y)$ cancels the mixed binomial terms. The product identity gives
   $$
   (xy)^p+p\delta(xy)=(x^p+p\delta(x))(y^p+p\delta(y)).
   $$
   Together with $\delta(1)=0$, these prove that $\varphi$ is a unital ring endomorphism.

2. **The converse needs a torsion hypothesis.** If multiplication by $p$ on $A$ is injective, every Frobenius lift determines a unique delta structure by
   $$
   \delta(x)=\frac{\varphi(x)-x^p}{p}.
   $$
   Congruence modulo $pA$ proves existence of the quotient; injectivity proves uniqueness. Additivity and multiplicativity of $\varphi$ give the delta identities after multiplying by $p$; cancelling $p$ proves them. Without injectivity, a Frobenius lift alone need not determine a delta structure or even admit one.

3. **Delta ideals give delta quotients.** If $i\in I$ and $\delta(I)\subseteq I$, then
   $$
   \delta(x+i)-\delta(x)=\delta(i)-C_p(x,i)\in I,
   $$
   because every monomial of $C_p(x,i)$ contains $i$. Thus $\delta(x+I)=\delta(x)+I$ is well defined on $A/I$ and satisfies the same identities.

4. **Square-zero ideals linearize delta.** For $I^2=0$ and $\delta(I)\subseteq I$, the restriction $\delta:I\to I$ is additive and satisfies
   $$
   \delta(xa)=\varphi(x)\delta(a),\qquad
   \delta(x+a)=\delta(x)+\delta(a)-x^{p-1}a
   $$
   for $x\in A$ and $a\in I$. The first equality is semilinearity with respect to $\varphi$. These formulas follow by deleting all terms containing two factors from $I$; the linked exercise supplies the full derivation.

5. **Delta-zero units have a first-order test.** For such an ideal $I$, the map $a\mapsto1+a$ identifies $I$ additively with $1+I$ multiplicatively, and
   $$
   \delta(1+a)=0\quad\Longleftrightarrow\quad\delta(a)=a.
   $$
   This follows from the preceding addition formula with $x=1$.

## Examples

> [!example] The integers
> The identity endomorphism of $\mathbb Z$ lifts Frobenius at every prime $p$, by Fermat's congruence. Its associated operation is
> $$
> \delta(n)=\frac{n-n^p}{p}.
> $$
> In particular $\delta(p)=1-p^{p-1}$, so $(p)$ is not a delta ideal, although the identity Frobenius lift preserves that ideal.

> [!example] Polynomials
> On $\mathbb Z[t]$, the endomorphism fixing $\mathbb Z$ and sending $t$ to $t^p$ is a Frobenius lift. The ring has no $p$-torsion, so it defines a delta structure. Here $\delta(t)=\delta(1)=0$, whereas
> $$
> \delta(t+1)=-C_p(t,1).
> $$
> Thus delta is not additive on the whole polynomial ring.

> [!example] Integral dual numbers
> On $B=\mathbb Z[\varepsilon]/(\varepsilon^2)$ use $\varphi(\varepsilon)=p\varepsilon$ and let $\varphi$ fix $\mathbb Z$. The resulting operation is
> $$
> \delta(n+m\varepsilon)=\frac{n-n^p}{p}+(1-n^{p-1})m\varepsilon.
> $$
> The ideal $(\varepsilon)$ is a square-zero delta ideal; delta restricts to the identity on it. Consequently all units $1+m\varepsilon$ have delta zero. The linked exercise verifies the construction and formulas.

> [!example] A Frobenius lift without a delta structure
> The identity map on $\mathbb F_p$ is a Frobenius lift, but the nonzero ring $\mathbb F_p$ has no delta structure. Indeed, repeated use of the delta addition identity and $\delta(1)=0$ gives, for every nonnegative integer $n$ in any delta ring,
> $$
> \delta(n\cdot1)=\frac{n-n^p}{p}\cdot1.
> $$
> This formula is proved by induction on $n$: the difference of the right-hand sides at $n+1$ and $n$ is $-C_p(n,1)$. At $n=p$ it gives $\delta(p\cdot1)=(1-p^{p-1})\cdot1=1$ in $\mathbb F_p$, contradicting $p\cdot1=0$ and $\delta(0)=0$. The quotient notation here denotes an integer computed before mapping to the ring.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Definitions 2.1 and 2.8 and Proposition 2.10 were checked against rendered pages of Carmeli–Nikolaus–Yuan, *Maps between spherical group rings*, 2026 unpaginated online-first version, PDF pp. 6, 8, and 9. The source uses the notation $\delta_p$; this note writes $\delta$ after fixing $p$. The checked pages have no printed page numbers.

The integral-polynomial definition, Frobenius-lift construction, delta-ideal definition, and square-zero formulas follow the source. The proof of the converse for rings without $p$-torsion, the quotient argument, and all concrete examples above are independent derivations. The linked exercise proves the square-zero calculations in full. This note concerns ordinary commutative rings; animated delta rings, Witt vectors, completed group rings, and ring spectra are outside its proof scope.
