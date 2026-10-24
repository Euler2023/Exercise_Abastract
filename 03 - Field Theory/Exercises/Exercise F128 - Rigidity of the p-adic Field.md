---
title: "Exercise F128: Rigidity of the p-adic Field"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §1, Exercise 5, printed p. 106, PDF p. 125"
created: 2026-10-20
---

# Exercise F128: Rigidity of the p-adic Field

## Problem Statement

> [!question] Neukirch, Chapter II, §1, Exercise 5
> The field $\mathbb Q_p$ of $p$-adic numbers has no automorphisms except the identity.

## Hints

> [!hint]- Hint 1: Find the integers by a field equation
> An abstract field automorphism fixes every rational number. Try to characterize $\mathbb Z_p$ using the existence of a solution to one polynomial equation with rational coefficients. For odd $p$, test whether $1+px^2$ is a square; for $p=2$, use $1+8x^2$.

> [!hint]- Hint 2: Construct roots without assuming continuity
> For odd $p$, lift a root of $Y^2\equiv1\pmod p$ one digit at a time. For $p=2$, construct compatible odd integers $a_n$ satisfying $a_n^2\equiv A\pmod{2^{n+1}}$, starting with $a_2=1$ when $A\equiv1\pmod8$. If $v_2(x)=-1$, the expression $1+8x^2$ has valuation zero, so use its residue modulo $4$ instead of the parity of its valuation.

> [!hint]- Hint 3: Fix every finite truncation
> Once $\sigma(\mathbb Z_p)=\mathbb Z_p$, one has $\sigma(p^n\mathbb Z_p)=p^n\mathbb Z_p$. For $z\in\mathbb Z_p$, its first $n$ digits form an ordinary integer $s_n$ with $z-s_n\in p^n\mathbb Z_p$. Compare $z$ and $\sigma(z)$ modulo every $p^n$, and use $\bigcap_{n\ge1}p^n\mathbb Z_p=\{0\}$.

## Solution

> [!success]- Solution
> **Proof scope:** Complete independent solution
>
> Fix a prime number $p$, and let $\sigma:\mathbb Q_p\longrightarrow\mathbb Q_p$ be an arbitrary field automorphism. We do not assume that $\sigma$ is continuous. We use the description
>
> $$
> \mathbb Z_p=\varprojlim_{n\ge1}\mathbb Z/p^n\mathbb Z,
> \qquad \mathbb Q_p=\operatorname{Frac}(\mathbb Z_p)
> $$
>
> from Neukirch's Proposition (1.3) and the following construction of the field of fractions [S4, Ch. II, §1, printed pp. 103–104, PDF pp. 122–123]. All additional facts needed below are proved here.
>
> **1. Elementary facts about digits, units, and first nonzero digits.**
> Reduction modulo $p^n$ is a ring homomorphism from $\mathbb Z_p$ to $\mathbb Z/p^n\mathbb Z$. Its kernel is $p^n\mathbb Z_p$: an element is zero modulo $p^n$ exactly when its first $n$ digits vanish, in which case shifting the remaining digits down by $n$ places expresses it as $p^n$ times an element of $\mathbb Z_p$. It follows also that
>
> $$
> \bigcap_{n\ge1}p^n\mathbb Z_p=\{0\}.
> $$
>
> An element $u\in\mathbb Z_p$ is a unit if and only if its residue modulo $p$ is nonzero. A unit must have nonzero residue because reduction preserves products. Conversely, if $u\bmod p\ne0$, then its residue modulo each $p^n$ is relatively prime to $p$ and has a unique multiplicative inverse in $\mathbb Z/p^n\mathbb Z$. Those inverses are compatible under reduction, by uniqueness. They therefore define an element of the inverse limit whose product with $u$ is $1$.
>
> Every nonzero $a\in\mathbb Z_p$ has a first nonzero digit, say at position $k\ge0$, and hence a factorization $a=p^ku$ with $u\in\mathbb Z_p^\times$. Taking quotients gives, for every $x\in\mathbb Q_p^\times$, a factorization
>
> $$
> x=p^ku,\qquad k\in\mathbb Z,\quad u\in\mathbb Z_p^\times.
> $$
>
> The integer $k$ is unique. Indeed, two such expressions with $k<\ell$ would give $u=p^{\ell-k}w$, whose right side has zero residue modulo $p$, contrary to $u$ being a unit. Define $v_p(x)=k$. Products of units are units, so
>
> $$
> v_p(xy)=v_p(x)+v_p(y).
> $$
>
> If $v_p(x)=k<\ell=v_p(y)$, then
>
> $$
> x+y=p^k\bigl(u+p^{\ell-k}w\bigr),
> $$
>
> and the expression in parentheses has the same nonzero residue as $u$. Consequently $v_p(x+y)=k$. In particular, a nonzero square has even valuation, and if $v_p(z)<0$, then $v_p(1+z)=v_p(z)$. These conclusions use only the preceding algebra of digits, rather than any later theorem about absolute values.
>
> **2. For odd $p$, every element of $1+p\mathbb Z_p$ is a square.**
> Let $p\ne2$ and let $A\in1+p\mathbb Z_p$. We construct integers $a_n$ such that
>
> $$
> a_n^2\equiv A\pmod{p^n},\qquad
> a_{n+1}\equiv a_n\pmod{p^n},\qquad a_n\equiv1\pmod p.
> $$
>
> Start with $a_1=1$. Suppose $a_n$ has been constructed. The quotient $(A-a_n^2)/p^n$ belongs to $\mathbb Z_p$; let $c_n$ be its residue modulo $p$. Because $2a_n$ is nonzero modulo $p$, there is a unique $t_n\in\{0,\ldots,p-1\}$ satisfying
>
> $$
> 2a_nt_n\equiv c_n\pmod p.
> $$
>
> Put $a_{n+1}=a_n+t_np^n$. Since $2n\ge n+1$ for $n\ge1$,
>
> $$
> a_{n+1}^2
> =a_n^2+2a_nt_np^n+t_n^2p^{2n}
> \equiv A\pmod{p^{n+1}}.
> $$
>
> The compatible residues $a_n\bmod p^n$ define $y\in\mathbb Z_p$. For every $n$, the equality $y\equiv a_n\pmod{p^n}$ implies $y^2\equiv A\pmod{p^n}$. The intersection property in Step 1 yields $y^2=A$.
>
> Now suppose that $x\notin\mathbb Z_p$. Write $v_p(x)=-m$ with $m\ge1$. Then
>
> $$
> v_p(px^2)=1-2m<0,
> \qquad v_p(1+px^2)=1-2m.
> $$
>
> This valuation is odd, so $1+px^2$ cannot be a square in $\mathbb Q_p$. Together with the construction applied to $A=1+px^2$ for integral $x$, this proves
>
> $$
> x\in\mathbb Z_p
> \quad\Longleftrightarrow\quad
> \exists y\in\mathbb Q_p:\ y^2=1+px^2
> \qquad(p\ne2).
> $$
>
> **3. For $p=2$, every element of $1+8\mathbb Z_2$ is a square.**
> Let $A\in1+8\mathbb Z_2$. For $n\ge2$, we construct odd integers $a_n$ satisfying the slightly stronger congruence
>
> $$
> a_n^2\equiv A\pmod{2^{n+1}},
> \qquad a_{n+1}\equiv a_n\pmod{2^n}.
> $$
>
> The starting value $a_2=1$ works because $A\equiv1\pmod8$. If $a_n$ is known, let $c_n\in\{0,1\}$ be the residue of $(A-a_n^2)/2^{n+1}$ modulo $2$. Choose $t_n\in\{0,1\}$ such that $a_nt_n\equiv c_n\pmod2$; this is possible because $a_n$ is odd. Set $a_{n+1}=a_n+t_n2^n$. As $2n\ge n+2$ for $n\ge2$,
>
> $$
> a_{n+1}^2
> =a_n^2+a_nt_n2^{n+1}+t_n^22^{2n}
> \equiv A\pmod{2^{n+2}}.
> $$
>
> The residues $a_n\bmod2^n$, together with their reductions modulo $2$, form an element $y\in\mathbb Z_2$ of the inverse limit. For every $n\ge2$, one has $y^2\equiv a_n^2\equiv A\pmod{2^n}$, so again $y^2=A$. No assertion about lifting a root modulo $2^n$ with an invertible derivative is being used.
>
> If $x\notin\mathbb Z_2$, there are two cases. If $v_2(x)=-m$ with $m\ge2$, then
>
> $$
> v_2(8x^2)=3-2m<0,
> \qquad v_2(1+8x^2)=3-2m,
> $$
>
> which is odd and excludes a square. If $v_2(x)=-1$, write $x=u/2$ with $u\in\mathbb Z_2^\times$. Then
>
> $$
> 1+8x^2=1+2u^2\equiv3\pmod4.
> $$
>
> This element is a unit. If it were $y^2$ for $y\in\mathbb Q_2$, multiplicativity of $v_2$ would force $v_2(y)=0$, so $y$ would be an odd $2$-adic integer. But the square of either odd residue modulo $4$ is $1$, a contradiction. This treats the exceptional negative valuation for which the preceding odd-valuation argument does not apply. We have proved
>
> $$
> x\in\mathbb Z_2
> \quad\Longleftrightarrow\quad
> \exists y\in\mathbb Q_2:\ y^2=1+8x^2.
> $$
>
> The case $x=0$ is included in both square-root criteria, with $y=1$.
>
> **4. An abstract automorphism preserves every integral congruence.**
> A field automorphism fixes $1$, hence every integer, and then every rational number by preservation of inverses. In particular, $\sigma$ fixes $p$ and $8$. Applying $\sigma$ to either equation in Steps 2–3 shows that
>
> $$
> x\in\mathbb Z_p\quad\Longrightarrow\quad\sigma(x)\in\mathbb Z_p.
> $$
>
> Applying the same argument to $\sigma^{-1}$ gives the reverse inclusion, so $\sigma(\mathbb Z_p)=\mathbb Z_p$. Therefore, for every integer $n\ge0$,
>
> $$
> \sigma(p^n\mathbb Z_p)=p^n\mathbb Z_p.
> $$
>
> This conclusion was obtained solely from a polynomial equation with rational coefficients; it did not require continuity of $\sigma$.
>
> **5. The digits force the automorphism to be the identity.**
> Let $z\in\mathbb Z_p$ have digits $z=\sum_{i\ge0}b_ip^i$ with $0\le b_i<p$. For every $n\ge1$, its finite truncation
>
> $$
> s_n=\sum_{i=0}^{n-1}b_ip^i\in\mathbb Z
> $$
>
> satisfies $z-s_n\in p^n\mathbb Z_p$. Since $\sigma(s_n)=s_n$, Step 4 gives $\sigma(z)-s_n\in p^n\mathbb Z_p$. Subtracting these two relations yields
>
> $$
> \sigma(z)-z\in p^n\mathbb Z_p
> \qquad\text{for every }n\ge1.
> $$
>
> Their intersection is zero, so $\sigma(z)=z$. Finally, for any $x\in\mathbb Q_p$, choose $m\ge0$ such that $p^mx\in\mathbb Z_p$; such an $m$ exists by the factorization in Step 1 (and is arbitrary when $x=0$). We obtain
>
> $$
> \sigma(x)=p^{-m}\sigma(p^mx)=p^{-m}p^mx=x.
> $$
>
> Thus every abstract field automorphism of $\mathbb Q_p$ is the identity.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Exercises/Exercise F108 - Automorphisms of p-adic Numbers|Exercise F108: the independently archived Lang version]]

## Notes

- **Source status:** The complete original statement was checked visually at 200 dpi against [S4, Ch. II, §1, Exercise 5, printed p. 106, PDF p. 125]. There is no printed hint for this exercise. The three hints above are independently supplied.
- **Source-contained construction:** Proposition (1.3) identifies $\mathbb Z_p$ with the inverse limit of the residue rings; the following paragraph describes $\mathbb Q_p$ as its field of fractions [S4, Ch. II, §1, printed pp. 103–104, PDF pp. 122–123]. These pages were also checked visually. The proof uses the given field structure and the embedded rational numbers.
- **Proof status and scope:** The unit criterion, first-digit valuation rules, square-root constructions, algebraic characterization of $\mathbb Z_p$, and rigidity argument are independently derived here. In particular, Exercise 2 is not silently imported. No form of Hensel's lemma, no theorem from §2 or later, and no automatic-continuity theorem is required. The inverse-limit construction is used to assemble explicitly compatible roots.
- **Boundary at $p=2$:** When $v_2(x)=-1$, the value of $1+8x^2$ is a unit rather than an element of odd valuation. Its residue modulo $4$ excludes a square. The root construction for integral $x$ maintains precision $2^{n+1}$ while choosing a root modulo $2^n$, so that all chosen residues really are compatible.
- **Relation to the existing archive:** [[03 - Field Theory/Exercises/Exercise F108 - Automorphisms of p-adic Numbers|F108]] records Lang's separate exercise and uses his proved non-archimedean root criterion to obtain the same algebraic test. The present note keeps Neukirch's exercise and provenance separate and supplies the root constructions directly. F108's cited Proposition 7.6 was independently checked against [S2, Ch. XII, §7, printed pp. 493–494, PDF pp. 508–509]; its use in that note is valid.
- **Routing:** The main task is rigidity of an abstract field under field automorphisms, so the exercise belongs to Field Theory. The arithmetic description of $\mathbb Z_p$ supplies the invariant that forces the automorphism to fix the field.
