---
title: Function Fields
aliases:
  - Function Field
  - Rational Function Fields
  - Algebraic Function Fields
  - 函数域
  - 有理函数域
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
  - function-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, §15.9, printed pp. 464-465, PDF pp. 476-477; Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, §1, printed pp. 355-357, PDF pp. 370-372; §4, printed p. 365, PDF p. 380; Ch. V, §4, Theorem 4.6, printed pp. 243-244, PDF pp. 258-259; Ch. IV, §2, printed pp. 181-183, PDF pp. 196-198; Ch. VI, §2, Example 9, printed pp. 275-276, PDF pp. 290-291"
source_status: verified
status: not-started
created: 2026-10-14
---

# Function Fields

## Definition

> [!info] Function fields and their base field
> A **function field over $k$**, in the broad convention used here, is a field extension $K/k$ generated as a field by finitely many elements:
> $$
> K=k(a_1,\ldots,a_m).
> $$
> A **one-variable algebraic function field over $k$** additionally has $\operatorname{tr.deg}_k K=1$; equivalently, it is finite over some rational function field $k(t)$ with $t$ transcendental over $k$.
> A **rational function field** in $r$ variables is $k(t_1,\ldots,t_r)=\operatorname{Frac}(k[t_1,\ldots,t_r])$, where the $t_i$ are algebraically independent over $k$. An extension is **rational over $k$** if it is $k$-isomorphic to such a field.

The base field is part of each definition. The aliases concerning rational or algebraic function fields lead to subtopics of this note; they do not identify every function field with a rational one.

Lang introduces function fields as finitely generated extensions of a ground field, without restricting their transcendence degree [S2, Ch. VIII, opening, printed p. 355, PDF p. 370]. Artin's §15.9 specializes to finite extensions of $F=\mathbb C(t)$ [S1, printed p. 464, PDF p. 476]. Neither terminology alone imposes the constant-field convention discussed below.

## Intuition

The independent parameters behave like coordinates. Algebraic generators satisfy polynomial relations over their rational function field. For example, a root $x$ of $x^2=t$ creates a degree-two extension of $k(t)$ when $\operatorname{char}k\ne2$, even though $k(t,x)=k(x)$ is itself rational over $k$.

A polynomial equation is a presentation of a field, while the chosen parameter $t$ specifies a map to the base. Different presentations can describe the same field or the same extension; an isomorphism over $k$ need not fix the particular subfield $k(t)$.

## Key Properties

1. A finitely generated field extension has finite transcendence degree. A maximal algebraically independent subset of a finite generating set gives a transcendence basis, and the remaining generators are algebraic over its rational function field.
2. Finitely many algebraic generators give a finite extension. Thus every finitely generated $K/k$ is finite over $k(t_1,\ldots,t_r)$ for a suitable transcendence basis.
3. Being algebraic over $k(t)$ is weaker than being finite over it. Finite generation is essential in the one-variable equivalence; an algebraic closure of $k(t)$ is not finite over $k(t)$.
4. A finite extension need not be separable in positive characteristic. The primitive element theorem applies after its finite-separable hypotheses have been established.

### The one-variable equivalence

> [!abstract] Finite generation and transcendence degree one
> For an extension $K/k$, the following are equivalent:
> - $K/k$ is finitely generated and has transcendence degree one.
> - There is a transcendental $t\in K$ with $[K:k(t)]<\infty$.

> [!success]- Independent proof
> Suppose $K=k(a_1,\ldots,a_m)$ has transcendence degree one. Choose a maximal algebraically independent subset of these generators. It has one element, say $t$; otherwise its cardinality would contradict the stated transcendence degree.
>
> For every remaining generator $a_i$, maximality gives a nonzero polynomial relation $P_i(t,a_i)=0$ with coefficients in $k$. Viewed as a polynomial in $a_i$, this relation remains nonzero over $k(t)$, because a nonzero polynomial in the transcendental element $t$ cannot vanish. Thus $a_i$ is algebraic over $k(t)$.
>
> Adjoin those finitely many elements one at a time. Each step has finite degree equal to the degree of the relevant minimal polynomial. The tower law gives
> $$
> [K:k(t)]=\prod_i[k(t,a_1,\ldots,a_i):k(t,a_1,\ldots,a_{i-1})]<\infty,
> $$
> omitting $t$ from the list of remaining generators.
>
> Conversely, let $K/k(t)$ be finite. A finite $k(t)$-basis generates $K$ as a field over $k(t)$, so together with $t$ it is a finite generating set over $k$. Since $K/k(t)$ is algebraic and $t$ is transcendental, $\{t\}$ is a transcendence basis and $\operatorname{tr.deg}_k K=1$.
>
> This expands the consequences of Lang's transcendence-basis framework [S2, Ch. VIII, §1, Theorem 1.1, printed pp. 356-357, PDF pp. 371-372]. The minimal-polynomial degree formula and tower law are imported algebraic inputs.

In fact, for such $K/k$, every $t\in K$ transcendental over $k$ gives a finite extension $K/k(t)$ by the same finite-generation argument. Its separability still depends on the choice of $t$.

## Separating Parameters and Plane Models

> [!abstract] A plane model from a separating parameter
> Let $K/k$ be finitely generated of transcendence degree one. If $K/k$ admits a **separating transcendence basis** $\{t\}$, then
> $$
> K=k(t)(\alpha)
> $$
> for some $\alpha\in K$, and there is an irreducible polynomial $f(t,X)\in k[t,X]$ of positive $X$-degree such that $K$ is the fraction field of $k[t,X]/(f)$.
> A separating parameter exists when $k$ is perfect, including characteristic zero. It also exists whenever the finitely generated extension is separable in Lang's generalized sense.

> [!success]- Independent deduction from the cited algebraic inputs
> Choose a separating parameter $t$, so $K/k(t)$ is finite separable. Lang's primitive element theorem gives $K=k(t)(\alpha)$ [S2, Ch. V, §4, Theorem 4.6, printed pp. 243-244, PDF pp. 258-259].
>
> Let $m(X)\in k(t)[X]$ be the monic minimal polynomial of $\alpha$. Multiply by a nonzero element of $k[t]$ to clear denominators, then divide by the gcd of the resulting coefficients. The result $f(t,X)\in k[t][X]$ is primitive and differs from $m$ by a nonzero scalar in $k(t)$.
>
> Gauss's lemma makes $f$ irreducible in $k[t,X]$, since it is primitive and irreducible over $k(t)$. The needed UFD and factorization results are [S2, Ch. IV, §2, Theorem 2.1, Corollary 2.2, and Theorem 2.3, printed pp. 181-183, PDF pp. 196-198].
>
> Set $A=k[t,X]/(f)$. This is a domain. Localizing at the nonzero elements of $k[t]$ gives
> $$
> (k[t]\setminus\{0\})^{-1}A\cong k(t)[X]/(m)\cong K.
> $$
> Since this localization is a field, it equals $\operatorname{Frac}(A)$. Thus $f=0$ is a plane equation presenting $K$.
>
> For perfect $k$, existence of the separating basis is supplied by Lang's Corollary 4.4 and Proposition 4.8 [S2, Ch. VIII, §4, printed p. 365, PDF p. 380]. This proof combines source results; it is not a geometric correspondence theorem proved in those pages.

The polynomial is primitive as a polynomial in $X$ over $k[t]$. It need not be monic in $X$, and its affine plane curve need not be nonsingular. Constructing a smooth complete curve model requires additional geometry.

> [!warning] An arbitrary parameter need not be separating
> In characteristic $p$, take $K=\mathbb F_p(s)$ and $t=s^p$. Then $K/\mathbb F_p(t)$ has degree $p$ and is purely inseparable: $s$ satisfies $X^p-t$, irreducible by Eisenstein at $t$, with derivative zero.
> This example is simple, but it shows that a finite extension arising from a chosen parameter need not be separable. The primitive-element argument above is applied only after selecting a separating parameter; general finite extensions cannot be declared simple from finiteness alone.

## Constant Fields

The **algebraic constant field relative to $k$** is
$$
k_{\mathrm{const}}=\{a\in K:a\text{ is algebraic over }k\}.
$$
It is a subfield: two algebraic elements lie in a common finite extension of $k$, which contains their sums, products, and nonzero inverses. Some conventions require $k_{\mathrm{const}}=k$; the broad definition above does not.

For $K=\mathbb Q(\sqrt2)(t)$, the chosen base $\mathbb Q$ has extra algebraic constants. Relative to $\mathbb Q(\sqrt2)$, the field is rational. Over an algebraically closed base such as $\mathbb C$, every element algebraic over the base already belongs to it, so this constant-field issue disappears.

## Rational-Function Degree and Automorphisms

For coprime $P,Q\in k[t]$, $Q\ne0$, and $r=P(t)/Q(t)\notin k$, one has
$$
[k(t):k(r)]=\max(\deg P,\deg Q).
$$
The complete independent proof in [[03 - Field Theory/Exercises/Exercise F62 - Automorphisms of K of X over an Arbitrary Field|Exercise F62]] uses the irreducibility of $P(T)-YQ(T)$ and Gauss's lemma. Consequently, every $k$-automorphism sends $t$ to $(at+b)/(ct+d)$ with $ad-bc\ne0$, and $\operatorname{Aut}_k(k(t))\cong\operatorname{PGL}_2(k)$. To match usual matrix multiplication with field-automorphism composition, assign to a matrix its inverse fractional substitution.

[[05 - Galois Theory/Exercises/Exercise Gal119 - Degree of Rational Functions and Automorphisms of Rational Function Fields|Exercise Gal119]] also studies the degree formula and generation by translations, scalings, and inversion. These are solutions written in this vault; Lang's exercise statements are not source-contained proofs of the formulas.

## Examples

> [!example] A degree-two extension that is rational over its constants
> If $\operatorname{char}k\ne2$ and $x^2=t$, Eisenstein at $t$ proves $X^2-t$ irreducible over $k(t)$. Hence $[k(t,x):k(t)]=2$. But $t=x^2$, so $k(t,x)=k(x)$; $x$ is transcendental because otherwise $t$ would be algebraic over $k$.

> [!example] Two independent variables
> The field $k(t,u)$ has transcendence degree two when $t,u$ are algebraically independent. It is a function field in Lang's broad sense, but is not a one-variable algebraic function field and cannot be finite over a one-variable rational field over $k$.

## Complex Geometry and Proof Boundaries

Artin starts with $K/\mathbb C(t)$ finite and a primitive polynomial $f(t,x)$, then considers its zero set and projection to the $t$-plane. His isomorphism convention allows finite point sets to be deleted from the covering models [S1, §15.9, equations 15.9.1-15.9.3, printed p. 464, PDF p. 476].

Theorem 15.9.4 states the Riemann existence correspondence between degree-$n$ extensions and connected $n$-sheeted branched coverings in that framework; its general proof is explicitly omitted. Proposition 15.9.5 does prove one direction: an isomorphism over $\mathbb C(t)$ induces mutually inverse rational maps between suitable open plane covering models [S1, printed p. 465, PDF p. 477]. It does not identify arbitrary singular affine models point by point without finite exclusions.

Lang's VI §2, Example 9 presupposes Riemann surfaces and coverings. It uses finite connected coverings of a punctured sphere, corresponding function-field extensions, and finite-index subgroups of its free fundamental group; a normal kernel realizes a finite group as a Galois group over $\mathbb C(t)$. The geometric correspondence and topology are imported background, not proved there [S2, printed pp. 275-276, PDF pp. 290-291].

The general identification with meromorphic functions on a **compact** Riemann surface requires the full algebraic-analytic correspondence, an external input here. For a noncompact surface $U$, its full meromorphic field $\mathcal M(U)$ must not automatically be identified with a finite extension of $\mathbb C(t)$.

For example, $\mathcal M(\mathbb C)$ contains both $t$ and $e^t$, and $e^t$ is transcendental over $\mathbb C(t)$. A polynomial relation, after clearing denominators, would read $\sum_{j=0}^N p_j(t)e^{jt}=0$ with $p_N\ne0$. Along positive real $t$, division by $e^{Nt}$ makes every lower term tend to zero, forcing the nonzero polynomial $p_N(t)$ to tend to zero, a contradiction. Thus this meromorphic field is not a one-variable algebraic function field over $\mathbb C$.

## Artin and Lang Compared

| Question | Artin | Lang |
|---|---|---|
| What is called a function field here? | Finite extension of $\mathbb C(t)$ in §15.9 | Finite generation over a general field in VIII's opening |
| Why a polynomial plane model? | Primitive element and primitive polynomial, 15.9.1 | Transcendence bases, separating parameters, primitive elements, and Gauss's lemma supply the algebraic inputs |
| How are isomorphic models compared? | Rational maps after finite exclusions, proved in 15.9.5 | General extension language; VI Example 9 imports the covering interpretation |
| Is the full geometric correspondence proved? | General proof of 15.9.4 omitted | Geometric background presupposed in VI Example 9 |

See [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]] for smoothness, singular models, and compactness, and [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]] for Artin's later gluing examples and their source issues through printed p. 471 / PDF p. 483.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[02 - Ring Theory/Concepts/Irreducible Polynomials|Irreducible Polynomials]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

- **Verified definitions and algebraic inputs:** Lang VIII's function-field convention and transcendence-basis framework, V Theorem 4.6 with proof, VIII Corollary 4.4 and Proposition 4.8, and IV's Gauss/UFD results were checked against the cited original PDF pages and page images. Infinite-cardinality and basis-completion parts of VIII Theorem 1.1 are left as exercises; this note does not use the infinite-cardinality claim.
- **Independent derivations:** The one-variable equivalence, combination of algebraic results into a plane model, examples, and noncompact meromorphic-field distinction are written for this vault. They are not quotations or full geometric theorems proved in those source slices.
- **Verified geometric proof scope:** Artin's definitions and 15.9.4-15.9.5 were checked at [S1, printed pp. 464-465, PDF pp. 476-477]. General Riemann existence is stated without proof; the open-model isomorphism direction is proved. Normalization, compactification, and the full compact meromorphic-field correspondence remain external inputs.
- **Lang geometric scope and source issue:** VI Example 9 was visually checked at [S2, printed pp. 275-276, PDF pp. 290-291]. Its initial puncture lists print $P_{n-1}$ whereas the subsequent lists use $P_{n+1}$; the coherent interpretation is $n+1$ punctures and free group of rank $n$. This original indexing inconsistency is recorded rather than silently attributed to OCR.
