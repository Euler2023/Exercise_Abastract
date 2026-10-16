---
title: Irreducible Polynomials
aliases:
  - Irreducible Polynomial
  - Polynomial Irreducibility
  - 不可约多项式
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - field-theory
created: 2026-10-14
source: "S1: Michael Artin, Algebra, 2nd ed., Prop. 11.8.4, printed p. 345, PDF p. 357; §§12.3-12.4, printed pp. 368-374, PDF pp. 380-386. S2: Serge Lang, Algebra, revised 3rd ed., Ch. IV, §§2-3, printed pp. 181-186, PDF pp. 196-201."
source_status: verified
status: not-started
---

# Irreducible Polynomials

## Definition

> [!info] Irreducibility over a field
> Let $F$ be a field. A polynomial $f\in F[x]$ is **irreducible over $F$** if $\deg f\geq1$ and every factorization $f=gh$ in $F[x]$ has a constant factor.
> Equivalently, $f$ cannot be written as a product of two polynomials of positive degree.
> The zero polynomial and constant polynomials are excluded. A degree-one polynomial is always irreducible.

[S1, Ch. 11, §11.8, definition preceding Prop. 11.8.4, printed p. 345, PDF p. 357]

> [!warning] Polynomial irreducibility versus irreducible elements
> In an integral domain $R$, an **irreducible element** is a nonzero nonunit $r$ such that $r=ab$ forces $a$ or $b$ to be a unit.
> The units of $R[x]$ are precisely the constant units of $R$: degree additivity forces any polynomial inverse to have degree zero.
> For a field $F$, every nonzero constant is a unit, so the two definitions agree in $F[x]$.
> In $\mathbb Z[x]$, a constant prime such as $2$ is an irreducible element. Also, $2x+2=2(x+1)$ is reducible in $\mathbb Z[x]$, although it is irreducible in $\mathbb Q[x]$.

See [[02 - Ring Theory/Concepts/Unique Factorization Domains|irreducible and prime elements]].

## Intuition

Irreducible polynomials are the factors that cannot be broken into smaller positive-degree factors using the allowed coefficients. The coefficient field is part of the question: adjoining new elements can make a factorization possible.

For instance, $x^2+1$ has no real root and is irreducible over $\mathbb R$, but over $\mathbb C$ it factors as $(x-i)(x+i)$. Likewise, $x^2-2$ is irreducible over $\mathbb Q$ and factors over $\mathbb Q(\sqrt2)$.

## Key Properties

### Roots and low degrees

> [!abstract] Degree two or three
> If $F$ is a field and $\deg f\in\{2,3\}$, then $f$ is irreducible over $F$ if and only if $f$ has no root in $F$.

**Independent proof.** A root $a\in F$ gives the factor $x-a$ by polynomial division. Conversely, if $f=gh$ with both factors of positive degree, then $\deg g+\deg h$ is $2$ or $3$, so one factor has degree one. Its root belongs to $F$ and is a root of $f$. Lang explicitly records this degree restriction after the integral-root test. [S2, Ch. IV, §3, printed p. 186, PDF p. 201]

> [!warning] No-root tests fail in higher degree
> The polynomial $x^4+4$ has no rational root, since it is positive on $\mathbb R$, but
> $$
> x^4+4=(x^2-2x+2)(x^2+2x+2).
> $$
> Thus lack of roots only excludes linear factors; it does not exclude quadratic factors. This factorization is also Lang's example. [S2, Ch. IV, §2, Remark 2, printed p. 183, PDF p. 198]

### Quotients, maximal ideals, and field extensions

> [!abstract] The field criterion
> Let $F$ be a field and $f\in F[x]$ have positive degree. Then
> $$
> f\text{ is irreducible over }F
> \iff F[x]/(f)\text{ is a field}
> \iff (f)\text{ is a maximal ideal}.
> $$

The maximal-ideal formulation is Artin's Proposition 11.8.4(a). [S1, Ch. 11, §11.8, printed p. 345, PDF p. 357]

> [!success]- Independent proof with an explicit inverse
> Suppose $f$ is irreducible. Since $\deg f>0$, the ideal $(f)$ is proper and the quotient has $1\neq0$.
> Let $\bar g$ be a nonzero class in $F[x]/(f)$; then $f$ does not divide $g$.
> Every common nonconstant divisor of $f$ and $g$ would be an associate of $f$, because $f$ is irreducible. Hence $\gcd(f,g)=1$.
> The Euclidean algorithm in $F[x]$ gives polynomials $a,b\in F[x]$ with
> $$
> ag+bf=1.
> $$
> Reducing modulo $(f)$ yields $\bar a\bar g=1$, so every nonzero class has an inverse. The quotient is therefore a field.
>
> Conversely, suppose $f=gh$ with $\deg g,\deg h>0$.
> Both degrees are strictly smaller than $\deg f$, so neither $g$ nor $h$ lies in $(f)$.
> Their classes are nonzero, but $\bar g\bar h=\bar f=0$. A field has no nonzero zero divisors, so the quotient cannot be a field.
>
> The final equivalence uses the general theorem that a quotient of a commutative ring with identity by a proper ideal is a field exactly when the ideal is maximal.

The imported inputs are the Euclidean algorithm and the quotient criterion; see [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]] and [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]].

If $f$ is monic irreducible of degree $n$, its quotient field has $F$-basis $1,\bar x,\ldots,\bar x^{n-1}$: division gives spanning, and a nonzero polynomial of degree below $n$ cannot lie in $(f)$. Thus adjoining $\bar x$ creates an extension of degree $n$.

## Practical Criteria

### Gauss's lemma and primitive polynomials

For a nonzero polynomial over a UFD $R$, its **content** is the gcd of its coefficients, determined up to a unit. The polynomial is **primitive** when this gcd is a unit. For $R=\mathbb Z$, one may take the positive gcd; Artin additionally normalizes primitive polynomials to have positive leading coefficient and positive degree.

> [!abstract] Gauss's lemma
> Let $R$ be a UFD and $K=\operatorname{Frac}(R)$.
> Products of primitive polynomials are primitive, and content satisfies $c(gh)=c(g)c(h)$ up to a unit.
> For a primitive $f\in R[x]$ of positive degree,
> $$
> f\text{ is irreducible in }R[x]
> \iff f\text{ is irreducible in }K[x].
> $$

**Independent derivation.** For each prime element $p\in R$, primitive $g,h$ have nonzero reductions in $(R/(p))[x]$. Since $p$ is prime, this polynomial ring is a domain; their product is nonzero. Therefore no prime divides every coefficient of $gh$, so $gh$ is primitive. Extracting contents proves the multiplicative content formula.

If a primitive $f$ factors in $K[x]$, clear denominators and extract contents to write the factors as $ag_0$ and $bh_0$, with $g_0,h_0\in R[x]$ primitive. Write $ab=r/s$ in lowest terms in $R$. Since $f=(r/s)g_0h_0$ has coefficients in $R$, every prime factor of $s$ would divide all coefficients of $g_0h_0$, contradicting primitivity. Thus $s$ is a unit. Since $f$ is primitive, $r$ is also a unit, giving a factorization in $R[x]$ with the same factor degrees. Conversely, a factorization of primitive $f$ in $R[x]$ cannot have a constant nonunit factor, since that would divide every coefficient. Any proper factorization therefore remains proper in $K[x]$.

[S1, Prop. 12.3.4(b), printed pp. 368-369, PDF pp. 380-381; Prop. 12.3.7(a), printed p. 370, PDF p. 382; S2, Ch. IV, Thm. 2.1 and Cor. 2.2, printed pp. 181-182, PDF pp. 196-197; Thm. 2.3 and following discussion, printed pp. 182-183, PDF pp. 197-198]

### Reduction modulo a prime

> [!abstract] Degree-preserving reduction
> Let $f=a_nx^n+\cdots+a_0\in\mathbb Z[x]$ have $n\geq1$, and let $p$ be a prime integer with $p\nmid a_n$.
> If $\bar f\in\mathbb F_p[x]$ is irreducible, then $f$ is irreducible in $\mathbb Q[x]$.

**Independent proof.** A positive-degree factorization over $\mathbb Q$ can be lifted to $f=gh$ with $g,h\in\mathbb Z[x]$ by Gauss's lemma. Since $p$ does not divide the product of their leading coefficients, reduction preserves both degrees. Thus $\bar f=\bar g\bar h$ would be a positive-degree factorization, a contradiction.

[S1, Prop. 12.4.3, printed p. 372, PDF p. 384]

The degree condition is essential: $2x^2+3x+1=(2x+1)(x+1)$ reduces modulo $2$ to the irreducible linear polynomial $x+1$. Also, a reducible reduction does not imply that the original polynomial is reducible: $x^2+1$ is irreducible over $\mathbb Q$ but reduces modulo $2$ to $(x+1)^2$.

### Eisenstein's criterion

> [!abstract] Eisenstein over the integers
> Let $f=a_nx^n+\cdots+a_0\in\mathbb Z[x]$ have $n\geq1$.
> If there is a prime integer $p$ such that $p\nmid a_n$, $p\mid a_i$ for every $0\leq i<n$, and $p^2\nmid a_0$, then $f$ is irreducible in $\mathbb Q[x]$.

**Independent proof.** If $f$ factors over $\mathbb Q$, Gauss's lemma gives $f=gh$ with both factors in $\mathbb Z[x]$ of positive degree. Reduction preserves their degrees and gives $\bar g\bar h=\bar a_nx^n$. Unique factorization in $\mathbb F_p[x]$ forces both reductions to be positive powers of $x$ times nonzero constants. Consequently, both constant coefficients are divisible by $p$, forcing $p^2\mid a_0$, a contradiction.

[S1, Prop. 12.4.6, printed p. 373, PDF p. 385]

Eisenstein also holds for a prime element of any UFD $R$, with conclusion in $\operatorname{Frac}(R)[x]$. This general form is a cited input from Lang, proved there. [S2, Ch. IV, Thm. 3.1, printed pp. 183-184, PDF pp. 198-199]

## Examples

> [!example] Constructing a finite field
> The polynomial $x^2+x+1$ has no root in $\mathbb F_2$: its values at $0$ and $1$ are both $1$.
> It is irreducible, so $\mathbb F_2[x]/(x^2+x+1)$ is a field with four elements, represented by $0,1,\bar x,1+\bar x$.

> [!example] Eisenstein after a change of variable
> For a prime integer $p$, let $\Phi_p(x)=1+x+\cdots+x^{p-1}$.
> In $\Phi_p(y+1)$, the leading coefficient is $1$, every other coefficient is divisible by $p$, and the constant coefficient is $p$. Indeed,
> $$
> \Phi_p(y+1)=\frac{(y+1)^p-1}{y}=\sum_{k=1}^{p}\binom pk y^{k-1}.
> $$
> The divisibility follows because $p$ divides $p!$ but does not divide $k!(p-k)!$ for $1\leq k<p$.
> Eisenstein applies. The invertible substitution $x=y+1$ preserves factorizations, so $\Phi_p$ is irreducible over $\mathbb Q$. [S1, Thm. 12.4.9, printed p. 374, PDF p. 386; S2, Ch. IV, §3, example, printed p. 184, PDF p. 199]

## Artin and Lang Compared

| Topic | Artin's treatment | Lang's treatment |
|---|---|---|
| Primitive polynomials | Integer coefficients, positive degree, positive leading coefficient; §12.3, printed p. 368 / PDF p. 380 | Content over a UFD, determined up to a unit; IV §2, printed p. 181 / PDF p. 196 |
| Gauss and coefficient fields | Proves the $\mathbb Z/\mathbb Q$ case in Props. 12.3.4 and 12.3.7 | Starts with a general UFD and its fraction field; Thms. IV.2.1 and IV.2.3 |
| Reduction | Prime-integer reduction with $p\nmid a_n$; Prop. 12.4.3 | A map between integral domains preserving degree excludes positive-degree factorizations; UFD hypotheses then give fraction-field irreducibility; Thm. IV.3.2, printed p. 185 / PDF p. 200 |
| Eisenstein | Integer polynomial and prime integer; Prop. 12.4.6 | Polynomial over any UFD and a prime element; Thm. IV.3.1 |

Use Artin for integer computations and Lang when the coefficient ring is, for example, $E[t]$ with $E$ a field. The primitive hypothesis and degree preservation must survive any comparison.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

The cited Artin and Lang statements were checked against rendered original-PDF pages. Artin gives proofs of the cited Gauss, reduction, Eisenstein, and prime-cyclotomic results; for Proposition 11.8.4(a), he directs the reader to the analogous preceding proof. Proposition 11.8.4(b), whose proof he explicitly omits, is not needed here.

Lang proves the general-UFD Gauss results, Eisenstein, and the reduction criterion in the cited ranges. His integral-root test, Proposition IV.3.3, is left to the reader; this note does not import that omitted proof.

Proofs labelled independent are vault derivations, not transcriptions of textbook proofs. The Euclidean algorithm, the maximal-ideal quotient criterion, and unique factorization in a polynomial ring over a field are the named prerequisite inputs. No computational verification or source figure is required.
