---
title: "Exercise AG123: Rational Descent of the Hecke Correspondence"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.9, Exercise 7.9.3, printed pp. 310\u2013312, PDF pp. 323\u2013325"
source_refs:
  - "S7/ch-7/sec-9/ex-3"
created: 2026-10-28
---

# Exercise AG123: Rational Descent of the Hecke Correspondence

## Problem Statement

> [!question] Original Exercise 7.9.3
> Show that the Hecke operator $T_p$ is defined over $\mathbb Q$.
>
> (a) The double-coset configuration uses $\alpha=\begin{pmatrix}1&0\\0&p\end{pmatrix}$, $\Gamma_3=\Gamma_1^0(N,p)=\Gamma_1(N)\cap\Gamma^0(p)$ and $X_1^0(N,p)=X(\Gamma_1^0(N,p))$. Define $\Gamma_{1,0}(N,p)=\Gamma_1(N)\cap\Gamma_0(Np)$ and $X_{1,0}(N,p)=X(\Gamma_{1,0}(N,p))$. Show that $\Gamma_{1,0}(N,p)=\alpha\Gamma_1^0(N,p)\alpha^{-1}$. Rephrase the paragraph after Theorem 6.3.2 to say that $T_p$ is pullback by
> $$
> X_{1,0}(N,p)\to X_1(N),\quad\tau\mapsto p\tau\tag{7.22}
> $$
> followed by pushforward by
> $$
> X_{1,0}(N,p)\to X_1(N),\quad\tau\mapsto\tau.\tag{7.23}
> $$
> The goal is that both maps be defined over $\mathbb Q$.
>
> (b) Show $\Gamma_1(Np)\subset\Gamma_{1,0}(N,p)\subset\Gamma_0(Np)$. Use Figure 7.2 and (7.13), at level $Np$, to obtain Figure 7.8, with an intermediate arithmetic field $K$ corresponding to $\mathbb C(X_{1,0}(N,p))$. Explain why $K$ is the function field of a curve over $\mathbb Q$, denoted $X_{1,0}(N,p)_{\mathrm{alg}}$. Using Theorem 7.7.1 and the two applications of the Restriction Lemma indicated in Figure 7.9, show that its complex function field is $\mathbb C(X_{1,0}(N,p))$. Obtain the field tower and $\rho$-images shown in Figure 7.10. (Hints are at the end of the book.)
>
> (c) The two field injections are $f(\tau)\mapsto f(p\tau)$ and $f(\tau)\mapsto f(\tau)$. Since $\mathbb C(X_1(N))=\mathbb C(j,f_1)$, it suffices to prove $j(p\tau),f_1(p\tau)\in K$. Use $\Gamma_{1,0}(N,p)\subset\Gamma_0(p)$ for the first.
>
> (d) Let $\tau'=p\tau$ and $j'=j(\tau')$, both in $K$ and hence in $\mathbb Q(j,E_j[Np])$. Show that there is a morphism $\varphi:E_j\to E_{j'}$ with kernel $\langle Q_{\tau,N}\rangle$, taking $Q_{\tau,Np}$ to $Q_{\tau',N}$, defined over some Galois extension $L$ of $\mathbb Q(j,E_j[Np])$. The second subscript denotes the order.
>
> (e) Let $\mathcal K=\operatorname{Gal}(\mathbb Q(j,E_j[Np])/K)$. Every $\sigma\in\mathcal K$ extends to $\operatorname{Gal}(L/K)$. Show that $\varphi^\sigma=\pm\varphi$ and $\varphi(Q_{\tau,Np})=Q_{\tau',N}$. Deduce $f_1(p\tau)\in K$.

> [!warning] Source issue
> In (d), the printed kernel $\langle Q_{\tau,N}\rangle$ has order $N$, whereas the map $z\mapsto pz$ has degree $p$ and kernel $\langle Q_{\tau,p}\rangle$. The latter is the intended correction. Also “both in $K$” applies to $j$ and $j'$, not to the analytic variable $\tau'$. Part (e)'s printed identity $\varphi(Q_{\tau,Np})=Q_{\tau',N}$ is retained; after conjugating, the invariant statement needed for descent is equality of $x$-coordinates, allowing signs.

## Hints

> [!hint]- Hint 1
> Identify the intermediate congruence subgroup with a triangular subgroup modulo $Np$ and then use fixed fields.

> [!hint]- Hint 2
> The quotient by the order-$p$ subgroup sends $1/(Np)$ to $1/N$. Galois conjugates of this quotient map differ only by sign, so the image point has a fixed $x$-coordinate.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Put $m=Np$, $A=\mathbb Q(j,E_j[m])$ and use its Galois group $\mathrm{GL}_2(\mathbb Z/m\mathbb Z)$ from Theorem 7.6.3. The letters $K$ for a field and $\mathcal K$ for its fixing group are distinguished here.
>
> (a) Conjugation takes $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ to $\begin{pmatrix}a&b/p\\pc&d\end{pmatrix}$. The source conditions are $p\mid b$, $N\mid c$, $a,d\equiv1\pmod N$; the image conditions are integral entries, $Np\mid pc$, $a,d\equiv1\pmod N$. The inverse conjugation proves equality of groups, including when $p\mid N$. Since $\alpha^{-1}\tau=p\tau$, the two legs of the usual double-coset correspondence become precisely (7.22) and (7.23). The divisor correspondence is the first leg's pullback followed by the second leg's pushforward, as stated.
>
> (b) The inclusions follow directly from the congruences. Define subgroups of the arithmetic Galois group by
> $$
> H_1=\left\{\pm\begin{pmatrix}a&b\\0&1\end{pmatrix}\right\},\quad
> H=\left\{\pm\begin{pmatrix}a&b\\0&d\end{pmatrix}:d\equiv1\pmod N\right\},\quad
> H_0=\left\{\begin{pmatrix}a&b\\0&d\end{pmatrix}\right\},
> $$
> where all matrices are invertible modulo $m$. Then $H_1\subset H\subset H_0$. Set $K=A^H$. The quotient $H_0/H_1\simeq(\mathbb Z/m\mathbb Z)^*/\{\pm1\}$ is the diamond group, so it identifies the indicated intermediate field over $\mathbb Q(X_0(m)_{\mathrm{alg}})$. The full field $A$ has constants $\mathbb Q(\zeta_m)$, with determinant describing their Galois action. The determinants of $H$ run through every unit: take $d=1$ and arbitrary unit $a$. Its fixed constants are therefore exactly $\mathbb Q$. Thus $K/\mathbb Q$ is a regular one-variable function field and gives a nonsingular projective curve over $\mathbb Q$.
>
> After adjoining $\mathbb C$, restriction to the geometric subgroup replaces each $H_i$ by $H_i\cap\mathrm{SL}_2(\mathbb Z/m\mathbb Z)$ modulo the scalar kernel. This is the Restriction Lemma applied first to the top and bottom fields, then to the intermediate fixing subgroup. The inverse image of $H\cap\mathrm{SL}_2$ in $\mathrm{SL}_2(\mathbb Z)$ is $\{\pm I\}\Gamma_{1,0}(N,p)$. Hence $\mathbb CK=\mathbb C(X_{1,0}(N,p))$.
>
> Here are the three figures as searchable field towers, with vertical entries in descending field order:
> $$
> \begin{array}{c|c|c}
> \text{complex field (Figures 7.8,7.9)}&\text{arithmetic field}&\text{fixing subgroup (Figure 7.10)}\\
> \mathbb C(X_1(m))&A^{H_1}=\mathbb Q(X_1(m)_{\mathrm{alg}})&H_1\\
> \mathbb C(X_{1,0}(N,p))=\mathbb CK&K=\mathbb Q(X_{1,0}(N,p)_{\mathrm{alg}})&H\\
> \mathbb C(X_0(m))&A^{H_0}=\mathbb Q(X_0(m)_{\mathrm{alg}})&H_0
> \end{array}
> $$
> Each row's left field is its middle field extended by constants. Top to bottom the field inclusion is $\supset$, and the subgroup inclusion is $\subset$. The top-to-bottom Galois groups in the first two columns of Figure 7.8 are both $(\mathbb Z/m\mathbb Z)^*/\{\pm1\}$. The full unit group need not be cyclic; no cyclicity of it is used in the restriction argument.
>
> (c) The identity injection restricts over $\mathbb Q$ because $H$ fixes the level-$N$ point's $x$-coordinate: on $E[N]$ its lower row is $(0,\pm1)$ modulo $N$. For the other injection, $j_p=j(p\tau)$ is a rational generator of the $X_0(p)$ function field. Since $H$ is upper triangular modulo $p$, it fixes this cyclic-$p$-subgroup invariant. Thus $j_p\in K$. This supplies the arithmetic content of the analytic group containment; analytic modularity alone would not establish rational constants.
>
> (d) Analytically multiplication by $p$ gives
> $$
> \mathbb C/(\mathbb Z\tau+\mathbb Z)\longrightarrow\mathbb C/(\mathbb Zp\tau+\mathbb Z),\quad z\longmapsto pz.
> $$
> It has degree $p$, kernel generated by $1/p$, and sends $1/(Np)$ to $1/N$. Transport it to the normalized universal elliptic curves. Algebraically the subgroup $\langle Q_{\tau,p}\rangle$ is rational over $A$, so the quotient isogeny exists over $A$; its quotient invariant is $j'=j(p\tau)$. An isomorphism from that quotient to $E_{j'}$ exists over a finite algebraic extension of $A$, since isomorphisms between short equations require only algebraic scaling parameters. Choose the isomorphism matching the analytic normalization, take a finite Galois closure $L/K$, and obtain $\varphi(Q_{\tau,m})=Q_{\tau',N}$. Its kernel is $\langle Q_{\tau,p}\rangle$, the corrected subgroup.
>
> (e) A matrix in $H$ sends $Q_{\tau,m}$ to $\pm[d]Q_{\tau,m}$ with $d\equiv1\pmod N$ and preserves $\langle Q_{\tau,p}\rangle$. Consequently $\varphi^\sigma$ and $\varphi$ have the same kernel and target $E_{j'}$. They differ by an automorphism of the target. Its generic invariant $j'$ is neither $0$ nor $1728$, so every origin-preserving automorphism is $\pm1$. Thus $\varphi^\sigma=\pm\varphi$. Since the image point has order $N$,
> $$
> (Q_{\tau',N})^\sigma=\varphi^\sigma(Q_{\tau,m}^\sigma)
> =\pm[d]\varphi(Q_{\tau,m})=\pm Q_{\tau',N}.
> $$
> Its $x$-coordinate is fixed by every automorphism of $L/K$, so $f_1(p\tau)=x(Q_{\tau',N})\in K$. Signs are sufficient; the marked point itself need not be fixed. Both field injections therefore descend over $\mathbb Q$, giving both morphisms over $\mathbb Q$. Pullback and pushforward on divisors and the induced Jacobian maps are defined over that field, proving the assertion for $T_p$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 310–312 / PDF pp. 323–325. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Source figures:** Figures 7.8–7.9, printed p. 311 / PDF p. 324, and Figure 7.10, printed p. 312 / PDF p. 325, contain only field towers and subgroup labels; they are transcribed above.
- **Proof inputs:** The universal arithmetic torsion Galois theorem, finite-group Galois correspondence, the Restriction Lemma, and the curve/function-field correspondence are used with their stated scopes.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
